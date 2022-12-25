package ba.unsa.etf.nwt.user_service.controller;

import ba.unsa.etf.nwt.user_service.model.User;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.LoginRequest;
import ba.unsa.etf.nwt.user_service.response.JwtAuthenticationResponse;
import ba.unsa.etf.nwt.user_service.security.JwtTokenProvider;
import ba.unsa.etf.nwt.user_service.service.*;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.authentication.AuthenticationManager;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.IOException;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/user/auth/")
public class AuthController  {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private UserService userService;

    private final CommunicationsService communicationsService;


    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider tokenProvider,CommunicationsService communicationsService) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
        this.communicationsService = communicationsService;
    }

    @PostMapping("/login")
    public JwtAuthenticationResponse login(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword()
                    )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = tokenProvider.generateToken(authentication);
            User user = userRepository.findByEmail(loginRequest.getEmail());
            User user2 = new User();
            user2.setEmail(loginRequest.getEmail());
            user2.setPassword(loginRequest.getPassword());
            user2.setId(3);
            String resetToken = UUID.randomUUID().toString();
            user.setToken(resetToken);
            userRepository.save(user);

            if(user == null) throw new UsernameNotFoundException("User not found with username or email : " + loginRequest.getEmail());
//            if(user.getIsActive() == false) throw new UsernameNotFoundException("User not found with username or email : " + loginRequest.getEmail());

            System.out.println("user");
            userService.sendMailCodeForLogin(loginRequest.getEmail());
            return new JwtAuthenticationResponse(3, jwt);

        } catch (UsernameNotFoundException e) {
            throw new UsernameNotFoundException("User not found!");
        }
                catch (MessagingException e) {
            throw new RuntimeException(e);
        } catch (TemplateException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}