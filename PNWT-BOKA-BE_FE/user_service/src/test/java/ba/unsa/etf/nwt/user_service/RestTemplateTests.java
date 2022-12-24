package ba.unsa.etf.nwt.user_service;

import ba.unsa.etf.nwt.user_service.model.User;
import ba.unsa.etf.nwt.user_service.repository.RolesRepository;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.AddUserRequest;
import ba.unsa.etf.nwt.user_service.request.SetRoleRequest;
import ba.unsa.etf.nwt.user_service.request.UpdateRestaurantUser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RestTemplateTests {

    @Autowired
    UsersRepository usersRepository;


    @Autowired
    private MockMvc mockMvc;
//
//    public static String asJsonString(final Object obj) {
//        try {
//            return new ObjectMapper().writeValueAsString(obj);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//    @Test
//    public void addUserRole() throws Exception {
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("user.test@gmail.com",null,387621232,"Test","TestTest2525*")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        User n = usersRepository.findByEmail("user.test@gmail.com");
//
//
//        this.mockMvc.perform(post("/userRole")
//                        .content(asJsonString(new SetRoleRequest(1,n.getId())))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        this.mockMvc.perform(delete("/user/"+n.getId()))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//    }
//
//
//    @Test
//    public void assignRoleError() throws Exception {
//
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("test@gmail.com",null,0602211,"Neira","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        User n = usersRepository.findByEmail("test@gmail.com");
//
//        this.mockMvc.perform(post("/userRole")
//                        .content(asJsonString(new SetRoleRequest(20,n.getId())))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("Role assigning failed!")));
//
//        this.mockMvc.perform(delete("/user/"+n.getId()))
//                .andDo(print())
//                .andExpect(status().isOk());
//    }
//
//    @Test
//    public void updateUserRestaurantOK() throws Exception {
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("test@gmail.com",null,0602211,"Neira","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        User n = usersRepository.findByEmail("test@gmail.com");
//
//        this.mockMvc.perform(post("/userRole")
//                        .content(asJsonString(new SetRoleRequest(1,n.getId())))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//        UpdateRestaurantUser update=new UpdateRestaurantUser();
//        update.setRestaurantId(245);
//        this.mockMvc.perform(put("/user/" + n.getId()+"/restaurant")
//                        .content(asJsonString(update))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//    }
//
//    @Test
//    public void updateUserRestaurantError() throws Exception {
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("test@gmail.com",null,0602211,"Neira","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        User n = usersRepository.findByEmail("test@gmail.com");
//
//        this.mockMvc.perform(post("/userRole")
//                        .content(asJsonString(new SetRoleRequest(2,n.getId())))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//        UpdateRestaurantUser update=new UpdateRestaurantUser();
//        update.setRestaurantId(245);
//        this.mockMvc.perform(put("/user/" + n.getId()+"/restaurant")
//                        .content(asJsonString(update))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("The user has not admin role!")));
//
//
//    }

}
