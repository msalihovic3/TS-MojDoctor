package ba.unsa.etf.nwt.user_service.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RequestRequest {

    private String description;
    private Integer user;
    private Integer doctor;
}
