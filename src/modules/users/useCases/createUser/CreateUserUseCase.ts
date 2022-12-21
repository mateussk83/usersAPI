import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {
 name: string;
 email: string;
 admin: boolean;
}

class CreateUserUseCase {
 constructor(private usersRepository: IUsersRepository) {}
 execute({name, email, admin}: IRequest) {
  const userAlreadyExists = this.usersRepository.findByEmail(email)
  if (userAlreadyExists) {
   throw new Error("User Already Exists!");
  }
  this.usersRepository.create({name, email, admin})
 }
}

export { CreateUserUseCase }