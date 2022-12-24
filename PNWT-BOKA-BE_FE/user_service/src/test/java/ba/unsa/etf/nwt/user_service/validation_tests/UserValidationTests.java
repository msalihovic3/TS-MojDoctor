package ba.unsa.etf.nwt.user_service.validation_tests;

import ba.unsa.etf.nwt.user_service.model.User;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.ActiveProfiles;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertFalse;

@ActiveProfiles("test")
class UserValidationTests {
    private static ValidatorFactory validatorFactory;
    private static Validator validator;

    @BeforeAll
    public static void createValidator() {
        validatorFactory = Validation.buildDefaultValidatorFactory();
        validator = validatorFactory.getValidator();
    }

    @AfterAll
    public static void close() {
        validatorFactory.close();
    }

    @Test
    public void testBlankUsersName(){
        User u = new User();
        u.setName("");
        u.setPassword("TestTest25*");
        u.setEmail("test1@gmail.com");
        Set<ConstraintViolation<User>> violations = validator.validate(u);
        assertFalse(violations.isEmpty());
    }
    @Test
    public void testNoName(){
        User u = new User();
        u.setPassword("TestTest25*");
        u.setEmail("test1@gmail.com");
        Set<ConstraintViolation<User>> violations = validator.validate(u);
        assertFalse(violations.isEmpty());
    }


    @Test
    public void testBlankEmail(){
        User u = new User();
        u.setName("Test");
        u.setPassword("TestTest25*");
        u.setEmail("");
        Set<ConstraintViolation<User>> violations = validator.validate(u);
        assertFalse(violations.isEmpty());
    }

    @Test
    public void testNoEmail(){
        User u = new User();
        u.setName("Test");
        u.setPassword("TestTest25*");
        Set<ConstraintViolation<User>> violations = validator.validate(u);
        assertFalse(violations.isEmpty());
    }

    @Test
    public void testInvalidEmail(){
        User u = new User();
        u.setName("Test");
        u.setPassword("TestTest25*");
        u.setEmail("test1");
        Set<ConstraintViolation<User>> violations = validator.validate(u);
        assertFalse(violations.isEmpty());
    }

    @Test
    public void testInvalidUsersPassword1(){
        User u = new User();
        u.setName("Test");
        u.setEmail("test1@gmail.com");
        u.setPassword("TestTest*");
        Set<ConstraintViolation<User>> violations = validator.validate(u);
        assertFalse(violations.isEmpty());
    }

    @Test
    public void testInvalidUsersPassword2(){
        User u = new User();
        u.setName("Test");
        u.setEmail("test1@gmail.com");
        u.setPassword("Test");
        Set<ConstraintViolation<User>> violations = validator.validate(u);
        assertFalse(violations.isEmpty());
    }

    @Test
    public void testInvalidUsersPassword3(){
        User u = new User();
        u.setName("Test");
        u.setEmail("test1@gmail.com");
        u.setPassword("TestTest1");
        Set<ConstraintViolation<User>> violations = validator.validate(u);
        assertFalse(violations.isEmpty());
    }

}