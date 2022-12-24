package ba.unsa.etf.nwt.user_service.request;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class UpdateUserRequest {
  private String email;
  private String jmbg;
  private String name;
  private Integer phoneNumber;



}