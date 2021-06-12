import express from "express";
import { UserController } from "userController";

const app = express();
app.use(express.json());

const userController = new UserController();

app.get("/users", async (req: any, res: any) => {
  const { id } = req.params;
  return await userController.getUser(id);
});
