package ReserveEasy.ReserveEasyWS.Configurations;

import ReserveEasy.ReserveEasyWS.Entities.User.User;
import ReserveEasy.ReserveEasyWS.Repositories.UserRepositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException
                ("Username Not Found with username: "
                        + username));

        return UserDetailsImpl.build(user);
    }
}
