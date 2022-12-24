package ba.unsa.etf.nwt.user_service.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import javax.persistence.*;

import ba.unsa.etf.nwt.user_service.annotation.PasswordValidation;
import ba.unsa.etf.nwt.user_service.model.roles.Role;

@Entity
@Table(name = "users")
public class User {


  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column(name = "id_user")
  private Integer id;

  @NotBlank(message = "Name is mandatory")
  @Size(min = 2, max = 30, message = "Min name length is 2 and max length is 30")
  @Column(name = "Name")
  private String name;

  //  @NotBlank(message = "Email is mandatory")
  @Size(max = 100, message = "Emails max length is 100")
  @Email(message = "Email should be valid")
  @Column(name = "Email",unique=true)
  private String email;

  @Column(name = "PhoneNumber")
  private Integer phoneNumber;

  @Column(name = "IsActive")
  private Boolean isActive;

  @Column(name = "Birtday")
  private String birtday;


  @Size(min = 13, message = "Jmbg  length is 100")
  private String jmbg;
  @NotBlank(message = "Password can't be blank")
  @Size(min = 6, message = "Passwords min length is 8")
  @PasswordValidation
  private String password;

  @NotBlank(message = "Password can't be blank")
  @Size(min = 6, message = "Passwords min length is 8")
  @PasswordValidation
  private String newPassword;

  @Size(min = 8, message = "Token min length is 8")
  private String token;

  public Integer getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(Integer phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public Integer getId() {
    return id;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getNewPassword() {
    return newPassword;
  }

  public void setNewPassword(String newPassword) {
    this.newPassword = newPassword;
  }


  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public String getJmbg() {
    return jmbg;
  }

  public void setJmbg(String jmbg) {
    this.jmbg = jmbg;
  }

  public String getBirtday() {
    return birtday;
  }

  public void setBirtday(String birtday) {
    this.birtday = birtday;
  }

  @ManyToMany(fetch = FetchType.LAZY ,cascade = CascadeType.DETACH)
  @JoinTable(name = "user_roles",
          joinColumns = @JoinColumn(name = "id_user"),
          inverseJoinColumns = @JoinColumn(name = "id_role"))
  private Set<Role> roles = new HashSet<>();


  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public Boolean getIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

}