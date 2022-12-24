package ba.unsa.etf.nwt.user_service.request;

import ba.unsa.etf.nwt.user_service.model.roles.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SetRoleRequest {

    private Integer idRole;
    private Integer idUser;
}