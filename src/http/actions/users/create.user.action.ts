import { Request, Response } from "express";
import CreateUserCommand from "../../../application/user/commands/create.user.command";
import CreateUserHandler from "../../../application/user/handlers/create.user.handler"

class CreateUserAction {
    async run(req: Request, res: Response){
        const command: CreateUserCommand = new CreateUserCommand(
            req.body.name,
        );
        if (!command.getName()) {
            return res.status(400).json({message: "Required fields"})
        }
        try{
            await CreateUserHandler.execute(command);
        }catch(error){
            console.error(error);
            return res.status(404).json({message: error + " Este Usuario ya ha sido creado"});
        }

        return res.status(201).json({message: "Usario created"});
    }
}
export default new CreateUserAction();
