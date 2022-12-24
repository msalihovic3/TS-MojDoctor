package ba.unsa.etf.nwt.user_service.service;

import ba.unsa.etf.nwt.user_service.exceptions.ResourceNotFoundException;
import ba.unsa.etf.nwt.user_service.model.Request;
import ba.unsa.etf.nwt.user_service.model.Solution;
import ba.unsa.etf.nwt.user_service.repository.RequestRepository;
import ba.unsa.etf.nwt.user_service.repository.SolutionRepository;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.SolutionRequest;
import ba.unsa.etf.nwt.user_service.response.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service

@RequiredArgsConstructor
public class SolutionService {
    private final SolutionRepository solutionRepository;

    private final UsersRepository usersRepository;

    private final RequestRepository requestRepository;

    public List<Solution> getAllSolutions() {
        return solutionRepository.findAll();
    }

    public Response addSolution(SolutionRequest solution, Integer id) {

        if (solution == null) {
            throw new ResourceNotFoundException("Solution is empty.");
        }
        Solution solution1 = new Solution();
        solution1.setDescription(solution.getDescription());
        solution1.setTitle(solution.getTitle());
        solution1.setUser(usersRepository.getById(id));
        System.out.println(solution1.getDescription());
        solutionRepository.save(solution1);
        Request request = requestRepository.getById(solution.getId_request());
        request.setSolution(solution1);
        requestRepository.save(request);

        return new Response("The solution is succesfully added!", HttpStatus.OK);
    }

    public Solution getSolutionById(UUID id) {
        Optional<Solution> optionalSolution = solutionRepository.findById(id);
        if (optionalSolution.isPresent()) {
            return optionalSolution.get();
        } else {
//            throw new NotFoundException("Solution with id " + id + " does not exist.");
        }
        return null;
    }

    public Response updateSolutionById(SolutionRequest solution, UUID id) {

        Solution solution1 = solutionRepository.getById(id);
        solution1.setDescription(solution.getDescription());
        solution1.setTitle(solution.getTitle());
        System.out.println(solution1.getDescription());

        solutionRepository.save(solution1);
        Request request = requestRepository.getById(solution.getId_request());
        request.setSolution(solution1);
        requestRepository.save(request);

        return new Response("The solution is succesfully update!", HttpStatus.OK);
    }

    public Solution deleteSolutionById(UUID id) {
        Optional<Solution> optionalSolution = solutionRepository.findById(id);

        if (!optionalSolution.isPresent()) {
//            throw new BadRequestException("Solution with id " + id + " does not exist.");
        }

        solutionRepository.deleteById(id);

        return optionalSolution.get();
    }

}
