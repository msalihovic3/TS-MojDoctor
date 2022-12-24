package ba.unsa.etf.nwt.user_service.request;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AddUserRequest {

    private String email;
    private Integer phoneNumber;
    private String name;
    private String password;

}
