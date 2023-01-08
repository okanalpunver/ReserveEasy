package ReserveEasy.ReserveEasyWS.Dtos.ResponseDtos;

import ReserveEasy.ReserveEasyWS.Entities.Token.UserJWT;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class UserResponseDto implements Serializable {
    private String username;
    private UserJWT jwt;
}
