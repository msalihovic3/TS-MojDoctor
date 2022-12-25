package ba.unsa.etf.nwt.user_service.service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;


@AllArgsConstructor
@NoArgsConstructor
@Service
public class MailService {

    @Autowired
    private JavaMailSenderImpl mailSender;

    @Qualifier("freeMarkerConfiguration")
    @Autowired
    private Configuration freemarkerConfig;

    @Value("${spring.mail.username}")
    private String cashRegisterServerMail;

    @Value("${spring.mail.password}")
    private String cashRegisterServerPassword;


    public void sendmail(String email, String name, String resetToken, String code) throws MessagingException, IOException, TemplateException {
        mailSender = new JavaMailSenderImpl();

        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        mailSender.setUsername(cashRegisterServerMail);
        mailSender.setPassword(cashRegisterServerPassword);

        Properties javaMailProperties = new Properties();
        javaMailProperties.put("mail.smtp.starttls.enable", "true");
        javaMailProperties.put("mail.smtp.auth", "true");
        javaMailProperties.put("mail.transport.protocol", "smtp");
        javaMailProperties.put("mail.debug", "true");

        mailSender.setJavaMailProperties(javaMailProperties);
        System.out.println(cashRegisterServerMail);
        System.out.println(cashRegisterServerPassword);
        System.out.println(code);
        MimeMessage message=mailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
        System.out.println(code);
        if( code=="REGISTRATION"){

            Template t = freemarkerConfig.getTemplate("email-template.ftl");
            Map model = new HashMap();
            model.put("name", name);
            model.put("token", "http://localhost:8091/confirm/token/"+resetToken);
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
            helper.setTo(email);
            helper.setSubject("Confirm your registration");
            helper.setText(html,true);
        } else if (code=="LOGIN") {
            Template t = freemarkerConfig.getTemplate("email-template-login.ftl");
            Map model = new HashMap();
//          link za stranivu gdje unosi kod
            model.put("token", resetToken);
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
            helper.setTo(email);
            helper.setSubject("Confirm your LOGIN");
            helper.setText(html,true);
        } else if (code=="NEWPASSWORD") {
            System.out.println("code");
            Template t = freemarkerConfig.getTemplate("email-template-password.ftl");
            Map model = new HashMap();
            System.out.println("code 1");
            model.put("token", "http://localhost:8091/confirm/token/"+resetToken);
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
            helper.setTo(email);
            System.out.println("code 2");
            helper.setSubject("Confirm your Passeord");
            helper.setText(html,true);
            System.out.println("code 3");
        }else if (code=="REGISTRATION ADMIN") {
            System.out.println("code");
            Template t = freemarkerConfig.getTemplate("email-template-create-user-admin.ftl");
            Map model = new HashMap();
            System.out.println("code 1");
            model.put("password", resetToken);
            model.put("name", name);
            model.put("email", email);
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
            helper.setTo(email);

            helper.setSubject("Confirm your Passeord");
            helper.setText(html,true);
        }

        mailSender.send(message);

    }

}