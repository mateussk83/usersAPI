import { UsersRepository } from "../../repositories/implementations/UsersRepository";



class TurnUserAdminUseCase {
 constructor(private usersRepository:UsersRepository) {}

 execute(id:string) {
  const user = this.usersRepository.findById(id)

  if(!user) {
   throw new Error("User not Found!")
  }
  user.admin = true;
  return user;

 }
}

export { TurnUserAdminUseCase }