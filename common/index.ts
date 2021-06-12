import { isBuffer } from "node:util";

export interface IUser {
  id: string;
  name: string;
}

export type GetUser = (id: string) => Promise<IUser>;

export interface ICanGetUser {
  getUser(id: string): Promise<IUser>;
}
