package ba.unsa.etf.nwt.user_service.utils;

import ba.unsa.etf.nwt.user_service.exceptions.ResourceNotFoundException;
import ba.unsa.etf.nwt.user_service.exceptions.UnauthorizedException;
import ba.unsa.etf.nwt.user_service.response.Response;
import org.springframework.http.HttpStatus;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.stream.Collectors;

public class ErrorHandlingHelper {

    public static Response handleConstraintViolationException(ConstraintViolationException exception) {
        StringBuilder message = new StringBuilder();
        List<String> messages = exception.getConstraintViolations().stream()
                .map(ConstraintViolation::getMessage).collect(Collectors.toList());
        for (int i = 0; i < messages.size(); i++)
            if (i < messages.size() - 1) message.append(messages.get(i)).append("; ");
            else message.append(messages.get(i));
        return new Response(message.toString(), HttpStatus.BAD_REQUEST);
    }

    public static Response handleEntityNotFoundException(ResourceNotFoundException exception) {
        return new Response(exception.getMessage(),HttpStatus.NOT_FOUND);
    }

    public static Response handleEntityUnauthorizedException(UnauthorizedException exception) {
        return new Response(exception.getMessage(),HttpStatus.UNAUTHORIZED);
    }
}