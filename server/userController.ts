import { ICanGetUser, IUser } from "@commonTypes";
export class UserController implements ICanGetUser {
  async getUser(id: string): Promise<IUser> {
    return new User("1", "Jack");
  }
}

export class User implements IUser {
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  id: string;
  name: string;
}
