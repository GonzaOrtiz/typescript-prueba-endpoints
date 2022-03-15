import User from "../../../domain/entities/user/user.entitiy"
import UserSchema from '../../../models/user.model';
class UserRepository {
    private users: User[];

    constructor() {
        this.users = [];

        console.log(this.users);
    }

    async findOneById(id: string): Promise<User | null> {
        const user = this.users.find(t => t.getId() === id);

        return (user) ? user : null;

    }

    async findOneByName(name: string): Promise<User | null> {
        const user = this.users.find(t => t.getName() === name);

        return (user) ? user : null;
    }

    async findAll() {
        console.log('llega todo ok');
        const userObj = new UserSchema({});
        const returnObj =  userObj.find();
        console.log(returnObj);
        return returnObj;
    }

    async save(user: User): Promise<void> {
        // this.users.push(user);
        // console.log(this.users);
        const userObj = new UserSchema({name: user.getName()});
        userObj.save();
    }
    async update(user: User): Promise<void> {
        this.users = this.users.map(function(t) {
            return t.getId() === user.getId() ? user : t;
        });
    }

    async deleteById(id: string): Promise<void> {
        this.users = this.users.filter(t => t.getId() !== id);
    }
}

export default new UserRepository;
