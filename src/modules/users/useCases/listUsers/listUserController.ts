import { Request, Response } from "express";
import { User } from "../../model/User";
import { ListUserUseCase } from "./listUserUseCase";



class ListUserController {
 constructor(private listUserUseCase: ListUserUseCase) {}

 handle(request:Request, response:Response):Response {
  const { email } = request.headers;

  const users = this.listUserUseCase.execute(email);

  return response.status(200).json(users);

 }
}

export { ListUserController }