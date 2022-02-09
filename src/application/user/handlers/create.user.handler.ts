import CreateUserCommand from "../commands/create.user.command";
import UserRepository from "../../../Infrastructure/repositories/user/user.repository"
import User from "../../../domain/entities/user/user.entitiy"

class CreateUserHandler {

    async execute(command: CreateUserCommand) {

        const user = await UserRepository.findOneById(command.getId());
        const userObj: User = new User(command.getName());
        await UserRepository.save(userObj)
    }
}
export default new CreateUserHandler();
