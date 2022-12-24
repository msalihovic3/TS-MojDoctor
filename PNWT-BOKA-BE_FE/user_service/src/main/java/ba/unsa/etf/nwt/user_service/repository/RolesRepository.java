package ba.unsa.etf.nwt.user_service.repository;
import ba.unsa.etf.nwt.user_service.model.roles.Role;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Role,Integer> {
    
}
