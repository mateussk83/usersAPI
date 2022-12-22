import { User } from "../../model/User";




class UsersRepository {
 private users: User[];

 private static INSTANCE: UsersRepository;

 private constructor() {
  this.users = [];
 }
 public static getInstance(): UsersRepository {
  if(!UsersRepository.INSTANCE) {
   UsersRepository.INSTANCE = new UsersRepository();
  }
  return UsersRepository.INSTANCE;
 }


 findByEmail(email?: string):any {
  const user = this.users.find((user) => user.email === email);
  return user;
 }
 findById(id:string):any {
  const user = this.users.find((user) => user.id === id);

  return user;
 }


 create({name, admin, email }:User):void{
  const user = new User();
  Object.assign(user, {
   name,
   admin, 
   email,
   created_at: new Date()
  })
  this.users.push(user)
 }

 list():User[] {
  return this.users 
 }
}

export { UsersRepository }