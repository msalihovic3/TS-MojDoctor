package ba.unsa.etf.nwt.user_service.request;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;


@Data
@AllArgsConstructor
public class SetPermissionRequest {

    private List<Integer> idPermissions;
    private Integer idRole;

}