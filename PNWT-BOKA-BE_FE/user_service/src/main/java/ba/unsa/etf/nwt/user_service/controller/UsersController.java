package ba.unsa.etf.nwt.user_service.controller;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import ba.unsa.etf.nwt.user_service.exceptions.ResourceNotFoundException;
import ba.unsa.etf.nwt.user_service.exceptions.UnauthorizedException;
import ba.unsa.etf.nwt.user_service.model.Permission;
import ba.unsa.etf.nwt.user_service.model.roles.Role;
import ba.unsa.etf.nwt.user_service.repository.PermissionRepository;
import ba.unsa.etf.nwt.user_service.repository.RolesRepository;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.*;
import ba.unsa.etf.nwt.user_service.response.Response;
import ba.unsa.etf.nwt.user_service.model.User;
import ba.unsa.etf.nwt.user_service.security.CurrentUser;
import ba.unsa.etf.nwt.user_service.security.UserPrincipal;
import ba.unsa.etf.nwt.user_service.service.UserService;

import ba.unsa.etf.nwt.user_service.utils.ErrorHandlingHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.AllArgsConstructor;

import javax.annotation.security.RolesAllowed;
import javax.validation.*;

@AllArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UsersController {

    private final UserService userService;

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    PermissionRepository permissionRepository;


    public Boolean hasPermission(String userEmail, String b){
        User user = usersRepository.findByEmail(userEmail);

        Set<Role> roles = user.getRoles();
        for (Role r: roles)
            if (r.getPermissions().stream().map(x-> x.getName()).collect(Collectors.toSet()).contains(b)){
                return  true;
            }
        return false;
    }


    @GetMapping("/user/roles")
    List<Role> allRoles(@CurrentUser UserPrincipal userPrincipal) throws Response {
        System.out.println("userPrincipal.getEmail()");
        System.out.println(userPrincipal.getEmail());
        Boolean permission = hasPermission(userPrincipal.getEmail(), "List roles");
        if(permission) {

            return rolesRepository.findAll();
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/permissions")
    List<Permission> allPermissions(@CurrentUser UserPrincipal userPrincipal) throws Response {

        Boolean permission = hasPermission(userPrincipal.getEmail(), "List permissions");
        if(permission) {
            return permissionRepository.findAll();
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/users/{type}")
    List<User> allUsers(@PathVariable String type) {
        return userService.getUsers(type);
    }

    @GetMapping("/users/doctors")
    List<User> allUsersDoctors() {
        return userService.getUsers("DOCTORS");
    }


    @GetMapping("/users")
    List<User> allUsers() {
        return userService.getUsersAll();
    }


    @GetMapping("/user/{id}")
    public ResponseEntity<User> getById(@PathVariable Integer id) throws Exception {
        Optional<User> user = usersRepository.findById(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            throw new ResourceNotFoundException("User with this id doesn't exist!");
        }
    }

    @GetMapping("/user/email/{email}")
    public Integer getByEmail(@PathVariable String email) throws Exception {
        User user = usersRepository.findByEmail(email);
      if (user != null) {
            return user.getId();
        } else {
            throw new ResourceNotFoundException("User with this email doesn't exist!");
        }
    }

    @PostMapping(path ="/userRole", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response setRole(@RequestBody SetRoleRequest userRole) throws Exception {


        try{
           return  userService.setRole(userRole);
        }
        catch(Exception e) {

            throw new ResourceNotFoundException("Role assigning failed!");
        }
    }

    @PostMapping(path ="/role", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response setRoleAdmin(@RequestBody SetRoleRequest userRole) throws Exception {


        try{
            return  userService.setRoleAdmin(userRole);
        }
        catch(Exception e) {

            throw e;
        }
    }


    @PostMapping(path = "/user", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response createUser(@RequestBody AddUserRequest user) throws Exception {

        try {

           return userService.registrationUser(user);

        }
        catch(ConstraintViolationException e) {

            return new Response(handleConstraintViolationException(e).getMessage(),HttpStatus.BAD_REQUEST);
        }
        catch (DataIntegrityViolationException e) {
            return new Response("User with this email already exists",HttpStatus.CONFLICT);
        }

    }

    @PostMapping(path = "/registration/user", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response registationUser(@RequestBody AddUserRequest user, @CurrentUser UserPrincipal userPrincipal ) throws Exception {


        try {
            Response response = userService.registrationUser(user);
            return response;
        } catch (ConstraintViolationException e) {

            return new Response(handleConstraintViolationException(e).getMessage(), HttpStatus.BAD_REQUEST);
        } catch (DataIntegrityViolationException e) {
            return new Response("User with this email already exists", HttpStatus.CONFLICT);
        }

    }


    @DeleteMapping("/delete/{id}")
    public Response deleteById(@PathVariable Integer id) throws Exception {

        try {
            usersRepository.deleteById(id);
            return new Response("User is succesfully deleted",HttpStatus.OK);
        }
        catch(Exception e) {

            throw new ResourceNotFoundException("User with this id doesn't exist!");
        }

    }


    @PutMapping(path = "/delete/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response updateUserProfile( @RequestBody UpdateUserRequest updateUser) throws Exception {

        try {
            usersRepository.findByEmail(updateUser.getEmail());

            try {

                userService.updateUserProfile(updateUser);
                return new Response("User is succesfully updated",HttpStatus.OK);

            }
            catch(ConstraintViolationException e) {

                return new Response(handleConstraintViolationException(e).getMessage(),HttpStatus.BAD_REQUEST);
            }

        }
        catch(Exception e) {

            throw new ResourceNotFoundException("User with this id doesn't exist!");
        }

    }




    @GetMapping("/confirm/token/{token}")
    public String geConfirmUserRegistration(@PathVariable String token) throws Exception {
        User user = usersRepository.findByToken(token);
        System.out.println(token);
        if (user.getIsActive()){
            user.setPassword(user.getNewPassword());
        }
        user.setIsActive(true);
        user.setToken(null);
        usersRepository.save(user);

        if (user != null) {
            return "You are successfully confirm";
        } else {
            throw new ResourceNotFoundException("User with this token doesn't exist!");
        }
    }

    @PostMapping(path ="/user/newpassword", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response setNewPassword(@RequestBody SetNewPassword userNewPassword) throws Exception {


        try{
            return  userService.setNewPassword(userNewPassword);
        }
        catch(Exception e) {

            throw new ResourceNotFoundException("Password assigning failed!");
        }
    }

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response handleConstraintViolationException(ConstraintViolationException exception) {
        return ErrorHandlingHelper.handleConstraintViolationException(exception);
    }


    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Response handleEntityNotFoundException(ResourceNotFoundException exception) {
        return ErrorHandlingHelper.handleEntityNotFoundException(exception);
    }

    @ExceptionHandler(UnauthorizedException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public Response handleEntityUnauthorizedxception(UnauthorizedException exception) {
        return ErrorHandlingHelper.handleEntityUnauthorizedException(exception);
    }



}
