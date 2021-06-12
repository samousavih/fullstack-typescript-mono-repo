import { IUser, ICanGetUser } from "@commonTypes";
const REACT_NATIVE_API_URL = "http://localhost:3000";
export default class actions implements ICanGetUser {
  getUser(id: string): Promise<IUser> {
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`${REACT_NATIVE_API_URL}/users/${id}`, {
      headers,
    })
      .then((response) => response.json())
      .then((user) => {
        return user;
      });
  }
}
