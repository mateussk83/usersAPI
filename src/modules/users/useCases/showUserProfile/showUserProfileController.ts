import { Request, Response } from "express";
import { ShowUserProfileUseCase } from "./showUserProfileUseCase";



class ShowUserProfileController {
 constructor(private showUserProfileUseCase:ShowUserProfileUseCase) {}

 handle(request:Request, response:Response):Response {
  const { id } = request.params;

  const user = this.showUserProfileUseCase.execute(id)

  return response.status(200).json(user)
 }
}

export { ShowUserProfileController }