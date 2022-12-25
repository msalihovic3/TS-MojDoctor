package ba.unsa.etf.nwt.user_service.controller;
import ba.unsa.etf.nwt.user_service.service.CommunicationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class CommunicationsController {

    @Autowired
    private CommunicationsService communicationsService;

    @Autowired
    private DiscoveryClient discoveryClient;

    @GetMapping("/eureka/service-instances/{applicationName}")
    public List<ServiceInstance> serviceInstancesByApplicationName(@PathVariable String applicationName) {
        return this.discoveryClient.getInstances(applicationName);
    }


    @GetMapping("/eureka/uri/{applicationName}")
    public String getURIFromService(@PathVariable String applicationName) {
        return communicationsService.getUri(applicationName);
    }

}
