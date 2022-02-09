import { Application } from "express";
import CommonRoutes from "../common.routes";
import ListUsersAction from "../../actions/users/list.users.action";
import CreateUserAction from "../../actions/users/create.user.action";

class UserRoutes extends CommonRoutes {
    constructor(app: Application) {
        super(app, "Users");
    }

    setUpRoutes(): Application {
        this.app.post('/users', CreateUserAction.run);
        this.app.get('/users', ListUsersAction.run);
        return this.app;
    }
}
export default UserRoutes;
