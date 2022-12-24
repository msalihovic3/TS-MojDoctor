package ba.unsa.etf.nwt.user_service.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NotificationRequest {

    private String content;
    private Integer senderId ;
    private Integer receiveId ;
    private Boolean isRead ;
    private Boolean reservationStatus ;
    private String type;

}
