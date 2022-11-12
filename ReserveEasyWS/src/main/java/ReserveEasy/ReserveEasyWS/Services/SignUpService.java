package ReserveEasy.ReserveEasyWS.Services;

import ReserveEasy.ReserveEasyWS.Dtos.UserDtos.UserDto;
import ReserveEasy.ReserveEasyWS.Entities.Users.User;
import ReserveEasy.ReserveEasyWS.Services.UserServices.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SignUpService {

    private UserService userService;

    public User createUser(UserDto userDto){
        return userService.createUser(userDto);
    }
}
