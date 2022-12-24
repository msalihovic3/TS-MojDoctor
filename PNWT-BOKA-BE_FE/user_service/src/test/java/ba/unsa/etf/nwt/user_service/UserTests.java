package ba.unsa.etf.nwt.user_service;

import ba.unsa.etf.nwt.user_service.model.User;
import ba.unsa.etf.nwt.user_service.repository.UsersRepository;
import ba.unsa.etf.nwt.user_service.request.AddUserRequest;
import ba.unsa.etf.nwt.user_service.request.SetRoleRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
class UserTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    UsersRepository usersRepository;

//    public static String asJsonString(final Object obj) {
//        try {
//            return new ObjectMapper().writeValueAsString(obj);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//    @Test
//    public void createUser() throws Exception {
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("testt@gmail.com",null,0602211,"Neira11","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        User n = usersRepository.findByEmail("testt@gmail.com");
//
//        this.mockMvc.perform(delete("/user/"+n.getId()))
//                .andDo(print())
//                .andExpect(status().isOk());
//    }
//
//    @Test
//    public void createUserErrorMinLengthName() throws Exception {
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("neiranovalic20@gmail.com",null,0602211,"A","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("Min name length is 2 and max length is 30")));
//    }
//
//    @Test
//    public void createUserErrorEmailExists() throws Exception {
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("test@gmail.com",null,0602211,"Test","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("test@gmail.com",null,0602211,"Test","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("User with this email already exists")));
//
//        User n = usersRepository.findByEmail("test@gmail.com");
//
//        this.mockMvc.perform(delete("/user/"+n.getId()))
//                .andDo(print())
//                .andExpect(status().isOk());
//    }
//
//    @Test
//    public void createUserErrorInvalidEmail() throws Exception {
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("neiranovalicc20@",null,0602211,"Test 1","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("Email should be valid")));
//    }
//
//    @Test
//    public void createUserErrorInvalidPassword() throws Exception {
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("neiranovalicc20@gmail.com",null,0602211,"Test 1","TestTest")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("Password not valid (at least 6 characters, 1 big letter, 1 small letter, 1 sign)")));
//    }
//
//    @Test
//    public void getUserById() throws Exception{
//
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("testtest@gmail.com",null,0602211,"Neiraa1","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        User n = usersRepository.findByEmail("testtest@gmail.com");
//
//        this.mockMvc.perform(get("/user/"+n.getId()))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        this.mockMvc.perform(delete("/user/"+n.getId()))
//                .andDo(print())
//                .andExpect(status().isOk());
//    }
//
//    @Test
//    public void getUserError() throws Exception{
//
//        this.mockMvc.perform(get("/user/"+1000))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("User with this id doesn't exist!")));
//    }
//
//    @Test
//    public void deleteAfterPost() throws Exception{
//        this.mockMvc.perform(post("/user")
//                        .content(asJsonString(new AddUserRequest("tes12t@gmail.com",null,0602211,"NeiraNeira","Test25*Test")))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//
//        User n = usersRepository.findByEmail("tes12t@gmail.com");
//        this.mockMvc.perform(delete("/user/"+n.getId()))
//                .andDo(print())
//                .andExpect(status().isOk());
//    }
//
//    @Test
//    void updateUserProfile() throws Exception{
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
//        String newUserInfo = "{\n" +
//                "  \"email\": \"newmail@etf.unsa.ba\",\n" +
//                "  \"name\": \"Test Update\",\n" +
//                "  \"password\": \"Password123*\"\n" +
//                "}";
//
//        RequestBuilder requestBuilder = MockMvcRequestBuilders.put("/user/"+n.getId())
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(newUserInfo);
//        mockMvc.perform(requestBuilder)
//                .andExpect(status().isOk())
//                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
//                .andExpect(content().json("{\"message\": \"User is succesfully updated\", \"statusCode\": \"OK\" }"));
//
//        this.mockMvc.perform(delete("/user/"+n.getId()))
//                .andDo(print())
//                .andExpect(status().isOk());
//    }
//
//    @Test
//    public void updateUserError() throws Exception {
//
//        String newUserInfo = "{\n" +
//                "  \"email\": \"newmail@etf.unsa.ba\",\n" +
//                "  \"name\": \"Test Update\",\n" +
//                "  \"password\": \"Password123*\"\n" +
//                "}";
//
//        this.mockMvc.perform(put("/user/" + 10000)
//                        .content(newUserInfo)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("User with this id doesn't exist!")));
//    }
//
//    @Test
//    public void deleteUserError() throws Exception{
//
//        this.mockMvc.perform(delete("/user/"+1000))
//                .andDo(print())
//                .andExpect(jsonPath("$.message", is("User with this id doesn't exist!")));
//    }

}
