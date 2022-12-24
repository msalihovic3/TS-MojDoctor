package ba.unsa.etf.nwt.user_service.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="request")
public class Request {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private UUID id;

//    @OneToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "id_user", referencedColumnName = "id_user", nullable = false)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user", nullable = true)
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_doctor", nullable = true)
    private User doctor;

    @Column(nullable = false)
    @NotBlank
    private String description;

    private String state;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime dateCreated;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "solution_id", referencedColumnName = "id", nullable = true)
    private Solution solution;

    public Request() {
    }

    public Request(User user,
                   String description,
                   String state,
                   LocalDateTime dateCreated,
                   Solution solution, User doctor) {
        this.user = user;
        this.description = description;
        this.state = state;
        this.dateCreated = dateCreated;
        this.solution = solution;
        this.doctor = doctor;

    }

    public Request(UUID id, User user, String description, String state, LocalDateTime dateCreated, Solution solution, User doctor) {
        this.id = id;
        this.user = user;
        this.description = description;
        this.state = state;
        this.dateCreated = dateCreated;
        this.solution = solution;
        this.doctor = doctor;
    }

    public Request(User user,
                   String description,
                   String state,
                   Solution solution, User doctor) {
        new Request(user,  description, state, LocalDateTime.now(), solution, doctor);
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getDoctor() {
        return doctor;
    }

    public void setDoctor(User doctor) {
        this.doctor = doctor;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Solution getSolution() {
        return solution;
    }

    public void setSolution(Solution solution) {
        this.solution = solution;
    }
}