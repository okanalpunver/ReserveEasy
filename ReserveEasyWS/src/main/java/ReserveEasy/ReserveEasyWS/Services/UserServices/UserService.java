package ReserveEasy.ReserveEasyWS.Services.UserServices;

import ReserveEasy.ReserveEasyWS.Dtos.UserDtos.UserDto;
import ReserveEasy.ReserveEasyWS.Entities.User.User;
import ReserveEasy.ReserveEasyWS.Repositories.UserRepositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private UserRepository userRepository;

    public User createUser(UserDto userDto){
        User user = User.builder().username(userDto.username).email(userDto.email).email(userDto.email).password(bCryptPasswordEncoder.encode(userDto.password)).build();
        return userRepository.save(user);

    }
}
