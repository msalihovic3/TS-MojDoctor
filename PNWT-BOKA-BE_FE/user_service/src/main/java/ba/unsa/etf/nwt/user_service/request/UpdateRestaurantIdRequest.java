package ba.unsa.etf.nwt.user_service.request;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UpdateRestaurantIdRequest {

    private Integer restaurantId;
}
