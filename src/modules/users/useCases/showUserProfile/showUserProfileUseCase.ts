import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";



class ShowUserProfileUseCase {
 constructor (private usersRepository:IUsersRepository) {}

 execute(id:string):User {
  const user = this.usersRepository.findById(id)
  if(!user) {
   throw new Error("User not found!")
  }
  return user
 }
}

export { ShowUserProfileUseCase }