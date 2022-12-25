package ba.unsa.etf.nwt.user_service.controller;

import ba.unsa.etf.nwt.user_service.model.Request;
import ba.unsa.etf.nwt.user_service.model.User;
import ba.unsa.etf.nwt.user_service.model.roles.Role;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.RequestRequest;
import ba.unsa.etf.nwt.user_service.response.Response;
import ba.unsa.etf.nwt.user_service.security.CurrentUser;
import ba.unsa.etf.nwt.user_service.security.UserPrincipal;
import ba.unsa.etf.nwt.user_service.service.RequestService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
//import com.github.fge.jsonpatch.JsonPatch;
//import com.github.fge.jsonpatch.JsonPatchException;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import static ba.unsa.etf.nwt.user_service.utils.ErrorHandlingHelper.handleConstraintViolationException;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/request")
public class RequestController {
    private final RequestService requestService;
    private final UsersRepository usersRepository;

    @PostMapping(path = "", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response createUser(@RequestBody RequestRequest user,@CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

//        Boolean permission = hasPermission(userPrincipal.getEmail(), "Add request");
//      if (permission){
        try {
            Response response= requestService.addRequest(user);
            return response;
        } catch (ConstraintViolationException e) {

            return new Response(handleConstraintViolationException(e).getMessage(), HttpStatus.BAD_REQUEST);
        } catch (DataIntegrityViolationException e) {
            return new Response("User with this email already exists", HttpStatus.CONFLICT);
        }
//     }else {
//        throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
//     }

    }

    private Boolean hasPermission(String email, String add_permissions) {


        User user = usersRepository.findByEmail(email);

        Set<Role> roles = user.getRoles();
        for (Role r: roles)
            if (r.getPermissions().stream().map(x-> x.getName()).collect(Collectors.toSet()).contains(add_permissions)){
                return  true;
            }
        return false;
    }

    @GetMapping(path = "/all")
    public ResponseEntity<List<Request>> getAllRequests(@CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

        Boolean permission = hasPermission(userPrincipal.getEmail(), "List requests");
        if (permission){
            return ResponseEntity.ok(requestService.getAllRequests(userPrincipal.getId()));
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/user/{id}")
    public ResponseEntity<List<Request>> getRequestByUserId(@PathVariable Integer id,@CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

        Boolean permission =true;
//                hasPermission(userPrincipal.getEmail(), "List requests");
        if (permission){
            return ResponseEntity.ok(requestService.getRequestByUserId(id));
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<List<Request>> getRequestByDoctorId(@PathVariable Integer id,@CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

        Boolean permission =true;
            hasPermission(userPrincipal.getEmail(), "List requests");
        if (permission){
            return ResponseEntity.ok(requestService.getRequestByDoctorId(userPrincipal.getId()));
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }

    }

    @PutMapping("/{id}")
    public Response updateRequestById(@PathVariable UUID id, @RequestBody @Valid Request request,@CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

        Boolean permission = hasPermission(userPrincipal.getEmail(), "Edit requests");
        if (permission){
            return requestService.updateRequestById(request, id);
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }

    }

    @PutMapping
    public Response updateRequest(@RequestBody @Valid Request request, @CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

        Boolean permission = hasPermission(userPrincipal.getEmail(), "Edit requests");
        if (permission){
            return requestService.updateRequestById(request, request.getId());
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }

    }

    @DeleteMapping("/{id}")
    public Response deleteRequestById(@PathVariable UUID id, @CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

        System.out.println( userPrincipal.getEmail());
        Boolean permission = hasPermission(userPrincipal.getEmail(), "Delete requests");
        if (permission){
            return requestService.deleteRequestById(id);
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }

    }

//    private Request applyPatchToRequest(
//            JsonPatch patch, Request targetRequest) throws JsonPatchException, JsonProcessingException {
//        ObjectMapper objectMapper = new ObjectMapper();
//        JsonNode patched = patch.apply(objectMapper.convertValue(targetRequest, JsonNode.class));
//        return objectMapper.treeToValue(patched, Request.class);
//    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable UUID id, @CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

        Boolean permission = hasPermission(userPrincipal.getEmail(), "Get request");
        if (permission){
            Optional<Request> user = requestService.getRequestById(id);
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }

    }

//    @PatchMapping(path = "/{id}", consumes = "application/json")
//    public ResponseEntity<Request> updateRequest(@PathVariable String id, @RequestBody JsonPatch patch) {
//        try {
//            Request request = requestService.getRequestById(UUID.fromString(id));
//            Request requestPatched = applyPatchToRequest(patch, request);
//            requestService.updateRequestById(requestPatched, requestPatched.getId());
//            return ResponseEntity.ok(requestPatched);
//       } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//    }
}

