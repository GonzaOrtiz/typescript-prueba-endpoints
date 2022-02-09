import { Request, Response } from "express";
import User from "../../../domain/entities/User/user.entitiy";
import UserRepository from "../../../Infrastructure/repositories/user/user.repository"

class ListUsersAction {
    async run(_req: Request, res: Response) {
        const rates: User[] = await UserRepository.findAll();

        return res.status(200).json(rates);
    }
}

export default new ListUsersAction();
