package com.goodbe.search.controller;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Hit;
import co.elastic.clients.json.jackson.JacksonJsonpMapper;
import co.elastic.clients.transport.ElasticsearchTransport;
import co.elastic.clients.transport.rest_client.RestClientTransport;
import io.swagger.annotations.ApiOperation;

import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.json.JSONException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.goodbe.search.dto.Item;

import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/es")
public class ApiController {
    // Create the low-level client
    RestClient restClient = RestClient.builder(new HttpHost("localhost", 9200)).build();

    // Create the transport with a Jackson mapper
    ElasticsearchTransport transport = new RestClientTransport(
            restClient, new JacksonJsonpMapper());

    // And create the API client
    ElasticsearchClient client = new ElasticsearchClient(transport);

    @ApiOperation(value = "검색", response = List.class)
    @GetMapping(value = "/item")
    public @ResponseBody
    ResponseEntity<String> search(@RequestParam(name = "id") String id) throws IOException, JSONException {

        String title = "";
        String body = "";

        SearchResponse<Item> search = client.search(s -> s
                        .index("Items")
                        .query(q -> q
                                .term(t -> t
                                        .field("_id")
                                        .value(v -> v.stringValue(id))
                                )),
                Item.class);

        for (Hit<Item> hit: search.hits().hits()) {
            title = hit.source().getTitle();
            body = hit.source().getBody();
        }

        JSONObject msg = new JSONObject();
        msg.put("title", title);
        msg.put("body", body);

        return new ResponseEntity<>(msg.toString(), HttpStatus.OK);
    }
}