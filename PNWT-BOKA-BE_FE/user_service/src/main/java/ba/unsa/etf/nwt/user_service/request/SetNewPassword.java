package ba.unsa.etf.nwt.user_service.request;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
@Data
@AllArgsConstructor
public class SetNewPassword {
    private String email;
    private String new_password;
    private String confirm_new_password;
}

