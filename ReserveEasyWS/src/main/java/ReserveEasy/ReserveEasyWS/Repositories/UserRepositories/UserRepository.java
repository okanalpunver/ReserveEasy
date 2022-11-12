package ReserveEasy.ReserveEasyWS.Repositories.UserRepositories;

import ReserveEasy.ReserveEasyWS.Entities.Users.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
