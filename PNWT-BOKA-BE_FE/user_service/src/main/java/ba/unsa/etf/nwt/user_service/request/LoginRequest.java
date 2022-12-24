package ba.unsa.etf.nwt.user_service.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LoginRequest {

    @NotBlank(message = "Email can't be blank")
    @Size(max = 100, message = "Emails max length is 100")
    private String email;

    @NotBlank(message = "Password can't be blank")
    private String password;

    public LoginRequest(@NotBlank(message = "Email can't be blank") @Size(max = 100, message = "Usernames max length is 100") String email, @NotBlank(message = "Password can't be blank") @Size(min = 6, max = 40, message = "Passwords min length is 6, max length is 40") String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
