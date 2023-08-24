package com.goodbe.search.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(indexName = "jobpost")
public class Edu {
    @Id
    private String trprId;
    private String title;
    private String titleLink;
    private String subTltle;
    private String subTitleLink;
    private String telNo;
    private String address;
    private String content;    
}