import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";



class CreateUserController{
 constructor(private createUserUseCase: CreateUserUseCase) {}

 handle(request: Request, response: Response) {
  const { name, email, admin} = request.body;

  this.createUserUseCase.execute({name, email, admin})

  return response.status(201).send()
 }
}

export { CreateUserController }