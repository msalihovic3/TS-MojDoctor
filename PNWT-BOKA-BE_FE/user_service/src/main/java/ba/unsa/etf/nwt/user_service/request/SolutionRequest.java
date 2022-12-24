package ba.unsa.etf.nwt.user_service.request;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;


@Data
@AllArgsConstructor
public class SolutionRequest {

    private String description;
    private String title;
    private UUID id_request;


}
