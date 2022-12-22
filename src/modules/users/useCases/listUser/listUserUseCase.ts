import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";


class ListUserUseCase {

 constructor(private usersRepository: UsersRepository) {}

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