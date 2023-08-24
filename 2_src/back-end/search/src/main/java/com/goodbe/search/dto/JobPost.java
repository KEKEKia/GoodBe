package com.goodbe.search.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(indexName = "jobpost")
public class JobPost {
    @Id
    private String id;
    private String companyId;
    private String companyData;
    private String companyUrl;
    private String jobContent;
    private String endDate;
    private String sal;
    private String jobData;    
}
