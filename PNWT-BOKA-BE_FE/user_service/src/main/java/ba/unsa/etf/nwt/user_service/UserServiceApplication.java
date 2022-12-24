package ba.unsa.etf.nwt.user_service;

import ba.unsa.etf.nwt.user_service.model.roles.Role;
import ba.unsa.etf.nwt.user_service.model.roles.RoleName;
import ba.unsa.etf.nwt.user_service.repository.RolesRepository;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@EnableJpaRepositories(basePackages = "ba.unsa.etf.nwt.user_service")

//@EnableEurekaClient
@SpringBootApplication
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}


	@Component
	class DemoCommandLineRunner implements CommandLineRunner{
	
		@Autowired
		private UsersRepository usersRepository;

		@Autowired
		private RolesRepository roleRepository;

		@Override
		public void run(String... args) throws Exception {
	
			// User user1 = new User();
			// user1.setEmail("user1@gmail.com");
			// user1.setName("User 1");
			// user1.setPhoneNumber(387621232);
//			 Set<Role> roles = new HashSet<>();
//			 Role adminRole = new Role();
//			 Role guestRole = new Role();
//			 adminRole.setId(1);
//			 adminRole.setName(RoleName.ADMIN);
//			 guestRole.setId(2);
//			 guestRole.setName(RoleName.GUEST);
//			 roleRepository.save(adminRole);
//			 roleRepository.save(guestRole);
			// adminRole.setName(RoleName.ADMIN);
//              roles.add(adminRole);
//			  roles.add(guestRole);
	        // user1.setRoles(roles);
			// usersRepository.save(user1);

			// User user2 = new User();
			// user2.setEmail("user2@gmail.com");
			// user2.setName("User 2");
			// user2.setPhoneNumber(387623316);
	        // user2.setRoles(roles);
			// usersRepository.save(user2);

			// User user3 = new User();
			// user3.setEmail("user3@gmail.com");
			// user3.setName("User 3");
			// user3.setPhoneNumber(387629837);
	        // user3.setRoles(roles);
			// usersRepository.save(user3);
	
		}
	}
}
