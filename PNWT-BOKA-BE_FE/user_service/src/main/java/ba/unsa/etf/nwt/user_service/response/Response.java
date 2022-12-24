package ba.unsa.etf.nwt.user_service.response;

import org.springframework.http.HttpStatus;

import lombok.Data;

@Data
public class Response extends Throwable {

    private String message;
    private HttpStatus statusCode;

    public Response(String message, HttpStatus statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }

    public Response(Response handleConstraintViolationException) {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(HttpStatus statusCode) {
        this.statusCode = statusCode;
    }
}
