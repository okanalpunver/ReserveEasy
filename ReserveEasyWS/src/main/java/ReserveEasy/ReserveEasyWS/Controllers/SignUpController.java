package ReserveEasy.ReserveEasyWS.Controllers;

import ReserveEasy.ReserveEasyWS.Dtos.UserDtos.UserDto;
import ReserveEasy.ReserveEasyWS.Entities.Token.UserJWT;
import ReserveEasy.ReserveEasyWS.Services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController {

    @Autowired
    private final SignUpService signUpService;

    @PostMapping("/signup")
    public UserJWT signUp(@RequestBody UserDto userDto){

    }
}
