package ReserveEasy.ReserveEasyWS.Dtos.UserDtos;

import ReserveEasy.ReserveEasyWS.Configurations.UserRoleEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
public class UserDto implements Serializable {

    public String username;
    public String password;
    public String email;

    public UserRoleEnum ROLE;

}
