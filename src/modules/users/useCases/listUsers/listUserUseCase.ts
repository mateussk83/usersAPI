import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class ListUserUseCase {

 constructor(private usersRepository: IUsersRepository) {}

 execute(email:string):User[] {
  // só mudar para id quando for entregar
  const user = this.usersRepository.findByEmail(email)
  console.log(user)
  if(!user) {
   throw new Error("User not found!")
  } 
  if(user.admin != true) {
   throw new Error("User is not admin!")
  }
  const users = this.usersRepository.list()
  return users
 }
}

export { ListUserUseCase }