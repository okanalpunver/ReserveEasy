package ReserveEasy.ReserveEasyWS.Controllers;

import ReserveEasy.ReserveEasyWS.Dtos.ResponseDtos.UserResponseDto;
import ReserveEasy.ReserveEasyWS.Dtos.UserDtos.UserDto;
import ReserveEasy.ReserveEasyWS.Entities.Users.User;
import ReserveEasy.ReserveEasyWS.Services.SignUpService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class SignUpController {

    private final SignUpService signUpService;

    @PostMapping("/signup")
    @ResponseBody
    public UserResponseDto signUp(@RequestBody UserDto userDto){
        User user = signUpService.createUser(userDto);
        return UserResponseDto.builder().username(user.getUsername()).build();
    }
}
