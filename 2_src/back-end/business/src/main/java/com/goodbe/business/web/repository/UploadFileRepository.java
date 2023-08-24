package com.goodbe.business.web.repository;

import com.goodbe.business.domain.file.UploadFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UploadFileRepository extends JpaRepository<UploadFile,Long> {
    List<UploadFile> findByPostId(Long id);
}
