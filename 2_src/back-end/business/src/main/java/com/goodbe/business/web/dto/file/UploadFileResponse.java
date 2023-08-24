package com.goodbe.business.web.dto.file;

import com.goodbe.business.domain.file.UploadFile;
import lombok.Data;

@Data
public class UploadFileResponse {
    private String uploadFileName;

    public UploadFileResponse(UploadFile entity) {
        this.uploadFileName = entity.getUploadFileName();
    }
}
