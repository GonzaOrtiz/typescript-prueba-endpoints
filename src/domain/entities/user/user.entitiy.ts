// import shortid from "shortid";
class User {
    private id: string;
    private name: string;

    constructor(name: string) {
        this.id = "123";
        this.name = name;
    }

    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string): string {
        return this.name = value;
    }
}

export default User;
