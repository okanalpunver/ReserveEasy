package ReserveEasy.ReserveEasyWS.Configurations;

import ReserveEasy.ReserveEasyWS.Configurations.UserRoleEnum;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="user_role")
@Data
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Enumerated
    @Column(name = "role")
    private UserRoleEnum role;

}
