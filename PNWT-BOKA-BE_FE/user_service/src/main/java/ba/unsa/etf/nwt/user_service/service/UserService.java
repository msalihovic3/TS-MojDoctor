package ba.unsa.etf.nwt.user_service.service;

import ba.unsa.etf.nwt.user_service.exceptions.ResourceNotFoundException;
import ba.unsa.etf.nwt.user_service.model.roles.Role;
import ba.unsa.etf.nwt.user_service.model.roles.RoleName;
import ba.unsa.etf.nwt.user_service.repository.RolesRepository;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.*;
import ba.unsa.etf.nwt.user_service.response.Response;
import ba.unsa.etf.nwt.user_service.model.User;

import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

import javax.mail.MessagingException;
import javax.validation.*;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final MailService mailService;

    private final UsersRepository usersRepository;
    private final RolesRepository rolesRepository;
    private final CommunicationsService communicationsService;
    public List<User> getUsers(String type) {
        System.out.println(type);
        if(type.equals("DOCTORS")){
           return   usersRepository.findAll().stream()
                     .filter(p ->{
                         System.out.println(p.getRoles());
                         List<Role> stringsList = new ArrayList<>(p.getRoles());
                         return stringsList.get(0).getName().name().equals("DOCTOR");}
                     ).collect(Collectors.toList());
        }
        return usersRepository.findAll();
    }
    public List<User> getUsersAll() {

        return usersRepository.findAll();
    }



    public Integer getIdForUser(String email){return usersRepository.findByEmail(email).getId();}

    public Response registrationUser( AddUserRequest addUser) {

        User user = new User();
        user.setEmail(addUser.getEmail());
        user.setName(addUser.getName());
        user.setPassword(passwordEncoder.encode(addUser.getPassword()));
        user.setNewPassword(passwordEncoder.encode(addUser.getPassword()));
        user.setPhoneNumber(addUser.getPhoneNumber());
        user.setIsActive(false);
        String resetToken = UUID.randomUUID().toString();
        user.setToken(resetToken);
        try {
            validateUser(user);
        }
        catch(ConstraintViolationException e) {
            throw e;
        }
        catch(DataIntegrityViolationException e) {
            throw e;
        }
        usersRepository.save(user);

        return new Response("The User is succesfully added!", HttpStatus.OK);
    }

    public Response setNewPassword(SetNewPassword newPassword) throws MessagingException, TemplateException, IOException {
        User user=null;

        if(newPassword.getNew_password().equals(newPassword.getConfirm_new_password())) {
            user = usersRepository.findByEmail(newPassword.getEmail());
            user.setNewPassword(passwordEncoder.encode(newPassword.getNew_password()));
            String resetToken = UUID.randomUUID().toString();
            user.setToken(resetToken);
            usersRepository.save(user);
            System.out.println(newPassword.getEmail());
            System.out.println(user.getName());
            System.out.println(resetToken);
//            mailService.sendmail(newPassword.getEmail(), user.getName(), resetToken, "NEWPASSWORD");
            return new Response(resetToken, HttpStatus.OK);
        }
        throw new ResourceNotFoundException("Password assigning failed!");
    }

    public Response setRole(SetRoleRequest userRole) throws MessagingException, TemplateException, IOException {

        Set<Role> roles = new HashSet<>();

        User user = usersRepository.getById(userRole.getIdUser());
        Role role = rolesRepository.getById(userRole.getIdRole());
        roles.add(role);
        user.setRoles(roles);
        System.out.println(user);
        usersRepository.save(user);
//        System.out.println(user.getEmail());
//        mailService.sendmail(user.getEmail(), user.getName(), user.getToken(), "REGISTRATION");

        return new Response("The role is succesfully assigned to the User!", HttpStatus.OK);
    }

    public Response setRoleAdmin(SetRoleRequest userRole) throws MessagingException, TemplateException, IOException {

        Set<Role> roles = new HashSet<>();

        User user = usersRepository.getById(userRole.getIdUser());
        Role role = rolesRepository.getById(userRole.getIdRole());
        roles.add(role);
        user.setRoles(roles);
        System.out.println(user);
        usersRepository.save(user);
//        System.out.println(user.getEmail());
//        mailService.sendmail(user.getEmail(), user.getName(), user.getPassword(), "REGISTRATION ADMIN");

        return new Response("The role is succesfully assigned to the User!", HttpStatus.OK);
    }

    public Response updateUser(Integer userId, AddUserRequest updateUser) {

        User user = usersRepository.getById(userId);
        user.setEmail(updateUser.getEmail());
        user.setName(updateUser.getName());
        user.setPhoneNumber(updateUser.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(updateUser.getPassword()));
        try {
            validateUser(user);
        }
        catch(ConstraintViolationException e) {
            throw e;
        }
        usersRepository.save(user);
        return new Response("The user data are succesfully updated!", HttpStatus.OK);
    }

    public Response updateUserProfile( UpdateUserRequest updateUser) {

        User user = usersRepository.findByEmail(updateUser.getEmail());
        user.setEmail(updateUser.getEmail());
        user.setName(updateUser.getName());
        user.setPhoneNumber(updateUser.getPhoneNumber());
        user.setJmbg(updateUser.getJmbg());

        try {
            validateUser(user);
        }
        catch(ConstraintViolationException e) {
            throw e;
        }
        usersRepository.save(user);
        return new Response("The user data are succesfully updated!", HttpStatus.OK);
    }

    public Response updateRestaurantId(Integer userId, UpdateRestaurantUser updateUser) {

        User user = usersRepository.getById(userId);
        usersRepository.save(user);
        return new Response("The user data are succesfully updated!", HttpStatus.OK);
    }

    public Response updateUserRestaurant(Integer userId, UpdateRestaurantUser updateUserRestaurant) {
        User user = null;
        try {
            user = usersRepository.getById(userId);
            validateUser(user);
        }
        catch(ConstraintViolationException e) {
            throw e;
        } catch(Exception e) {
            throw  new ResourceNotFoundException("The user with this Id not exist!");
        }
        for (Role role: user.getRoles()) {

            if(role.getName() == RoleName.ADMIN) {
                usersRepository.save(user);
                System.out.println(role.getName());
                return new Response("The user data are succesfully updated!", HttpStatus.OK);
            }
        }
        throw  new ResourceNotFoundException("The user has not admin role!");
    }

    public void validateUser(User user) throws ConstraintViolationException {

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<User>> violations = validator.validate(user);

        if (!violations.isEmpty()) {
            throw new ConstraintViolationException(new HashSet<ConstraintViolation<?>>(violations));
        }

    }

    public String sendMailCodeForLogin(String userMail ) throws MessagingException, TemplateException, IOException {

        String resetToken = UUID.randomUUID().toString();
        User user = usersRepository.findByEmail(userMail);
        user.setToken(resetToken);
        user.setIsActive(false);
        usersRepository.save(user);

//        mailService.sendmail(userMail, user.getName(), user.getToken(), "LOGIN");
        return resetToken;
    }

}
