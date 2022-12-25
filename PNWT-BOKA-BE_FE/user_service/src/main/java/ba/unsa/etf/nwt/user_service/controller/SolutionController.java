package ba.unsa.etf.nwt.user_service.controller;

import ba.unsa.etf.nwt.user_service.model.Solution;
import ba.unsa.etf.nwt.user_service.model.User;
import ba.unsa.etf.nwt.user_service.model.roles.Role;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.SolutionRequest;
import ba.unsa.etf.nwt.user_service.response.Response;
import ba.unsa.etf.nwt.user_service.security.CurrentUser;
import ba.unsa.etf.nwt.user_service.security.UserPrincipal;
import ba.unsa.etf.nwt.user_service.service.SolutionService;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import static ba.unsa.etf.nwt.user_service.utils.ErrorHandlingHelper.handleConstraintViolationException;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/solution")
public class SolutionController {
    private final SolutionService solutionService;

    private final UsersRepository usersRepository;

    private Boolean hasPermission(String email, String add_permissions) {


        User user = usersRepository.findByEmail(email);

        Set<Role> roles = user.getRoles();
        for (Role r: roles)
            if (r.getPermissions().stream().map(x-> x.getName()).collect(Collectors.toSet()).contains(add_permissions)){
                return  true;
            }
        return false;
    }

    @PostMapping
    public Response addSolution(@RequestBody @Valid SolutionRequest solution, @CurrentUser UserPrincipal userPrincipal) throws Exception, Response {

        Boolean permission = true;
        if (permission){
            try {
                System.out.println(solution);
                Response response= solutionService.addSolution(solution, userPrincipal.getId());
                return response;
            } catch (ConstraintViolationException e) {

                return new Response(handleConstraintViolationException(e).getMessage(), HttpStatus.BAD_REQUEST);
            } catch (DataIntegrityViolationException e) {
                return new Response("Solution with this id already exists", HttpStatus.CONFLICT);
            }
        }else {
            throw new Response("User with this email has not permission", HttpStatus.BAD_REQUEST);
        }


    }

    @GetMapping(path = "/all")
    public ResponseEntity<List<Solution>> getAllSolutions() {
        return ResponseEntity.ok(solutionService.getAllSolutions());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Solution> getSolutionById(@PathVariable UUID id) {
        return ResponseEntity.ok(solutionService.getSolutionById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Response> updateSolutionById(@PathVariable UUID id, @RequestBody @Valid SolutionRequest solution) {
        return  ResponseEntity.ok(solutionService.updateSolutionById(solution, id));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Solution> deleteSolutionById(@PathVariable UUID id) {
        return ResponseEntity.ok(solutionService.deleteSolutionById(id));
    }

//    private Solution applyPatchToSolution(
//            JsonPatch patch, Solution targetSolution) throws JsonPatchException, JsonProcessingException {
//        ObjectMapper objectMapper = new ObjectMapper();
//        JsonNode patched = patch.apply(objectMapper.convertValue(targetSolution, JsonNode.class));
//        return objectMapper.treeToValue(patched, Solution.class);
//    }
//
//    @PatchMapping(path = "/{id}", consumes = "application/json")
//    public ResponseEntity<Solution> updateSolution(@PathVariable String id, @RequestBody JsonPatch patch) {
//        try {
//            Solution solution = solutionService.getSolutionById(UUID.fromString(id));
//            Solution solutionPatched = applyPatchToSolution(patch, solution);
//            solutionService.updateSolutionById(solutionPatched, solutionPatched.getId());
//            return ResponseEntity.ok(solutionPatched);
//       } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//    }
}