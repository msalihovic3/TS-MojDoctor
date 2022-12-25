package ba.unsa.etf.nwt.user_service.service;

import ba.unsa.etf.nwt.user_service.model.EmailDetails;

// Interface
public interface EmailService {

    // Method
    // To send a simple email
    Boolean sendSimpleMail(EmailDetails details);

}