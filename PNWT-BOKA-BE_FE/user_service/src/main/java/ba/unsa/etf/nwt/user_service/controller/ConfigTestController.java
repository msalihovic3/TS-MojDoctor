package ba.unsa.etf.nwt.user_service.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RefreshScope
public class ConfigTestController {
    //Value and GetMapping for config server
    @Value("${my.variable: default value}")
    private String variable;

    @GetMapping("/configserver/test")
    public String getVariable() {
        return "RETURNED VARIABLE: " + variable;
    }
}
