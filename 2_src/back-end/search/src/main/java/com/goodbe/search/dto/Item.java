package com.goodbe.search.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.elasticsearch.annotations.Document;

@Setter
@Getter
@Document(indexName = "items")
public class Item {
    private String title;
    private String body;
}