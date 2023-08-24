package com.goodbe.business.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "가입된 이메일")
public class AlreadyExistedMemberException extends RuntimeException{
    public AlreadyExistedMemberException(String message) {
        super(message);
    }

    public AlreadyExistedMemberException(String message, Throwable cause) {
        super(message, cause);
    }

    public AlreadyExistedMemberException(Throwable cause) {
        super(cause);
    }

    public AlreadyExistedMemberException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
