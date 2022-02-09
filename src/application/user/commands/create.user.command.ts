
class CreateUserCommand {
    private id: string;
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }

}
export default CreateUserCommand;
