package ba.unsa.etf.nwt.user_service.security;


import ba.unsa.etf.nwt.user_service.model.User;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UsersRepository userRepository;

    public CustomUserDetailsService(UsersRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        try {
            User user = userRepository.findByEmail(email);
            if(user == null) throw new UsernameNotFoundException("User not found with username or email : " + email);
            return UserPrincipal.create(user);
        } catch (UsernameNotFoundException e){
            System.out.println(e.getMessage());
            throw e;
        }
    }

    // This method is used by JWTAuthenticationFilter
    @Transactional
    public UserDetails loadUserById(Integer id) {
        try {
            User user = userRepository.findById(id).orElseThrow(
                    () -> new UsernameNotFoundException("User not found with id : " + id)
            );

            return UserPrincipal.create(user);
        } catch (UsernameNotFoundException e){
            System.out.println(e.getMessage());
        }
        return null;
    }
}