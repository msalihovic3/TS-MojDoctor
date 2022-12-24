package ba.unsa.etf.nwt.user_service.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "permission")
public class Permission {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "id_permission")
    private Integer id;

    @NotBlank(message = "Name is mandatory")
    @Size(min = 2, max = 30, message = "Min name length is 2 and max length is 30")
    @Column(name = "Name")
    private String name;

    public Integer getId() {
        return id;
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


}