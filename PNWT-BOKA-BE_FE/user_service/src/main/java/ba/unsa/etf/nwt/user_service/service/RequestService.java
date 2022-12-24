package ba.unsa.etf.nwt.user_service.service;

import ba.unsa.etf.nwt.user_service.exceptions.ResourceNotFoundException;
import ba.unsa.etf.nwt.user_service.model.Request;
import ba.unsa.etf.nwt.user_service.model.User;
import ba.unsa.etf.nwt.user_service.repository.RequestRepository;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.RequestRequest;
import ba.unsa.etf.nwt.user_service.response.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RequestService {
    private final RequestRepository requestRepository;

    private final UsersRepository userrepository;
    public List<Request> getAllRequests(Integer id) {
        return requestRepository.getAllByUserId(id);
    }

    public Response addRequest(RequestRequest request) {
        System.out.println(request);
        if (request == null) {
            throw new ResourceNotFoundException("Request is empty.");
        }
        Request request1 = new Request();
        request1.setDescription(request.getDescription());
        User user = userrepository.getById(request.getUser());
        System.out.println(request.getUser());
        System.out.println("mikiiii");
        request1.setUser(userrepository.getById(request.getUser()));
        request1.setDoctor(userrepository.getById(request.getDoctor()));
        request1.setState("State.NA_CEKANJU");
        System.out.println(request1);
        requestRepository.save(request1);
        return new Response("The User is succesfully added!", HttpStatus.OK);
    }

    public Optional<Request> getRequestById(UUID id) {
        System.out.println(id);
        Optional<Request> request = requestRepository.findById(id);

        return request;
    }

    public List<Request> getRequestByUserId(Integer id) {

        List<Request> optionalRequest = requestRepository.getAllByUserId(id);

        return optionalRequest;
    }

    public List<Request> getRequestByDoctorId(Integer id) {

        List<Request> optionalRequest = requestRepository.getAllByDoctorId(id);

        return optionalRequest;
    }

    public Response updateRequestById(Request request, UUID id) {

         requestRepository.save(request);
        return new Response("The User is succesfully added!", HttpStatus.OK);
    }

    public Response deleteRequestById(UUID id) {

        System.out.println(id);
        Request request = requestRepository.getById(id);
        request.setUser(null);
        request.setDoctor(null);
        requestRepository.save(request);
        requestRepository.deleteById(id);

        return new Response("The User is succesfully deleted!", HttpStatus.OK);
    }
}
