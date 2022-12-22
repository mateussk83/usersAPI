import { User } from "../model/User";

interface ICreateUserDTO {
 name: string;
 email: string;
 admin: boolean;
}


interface IUsersRepository {
 create({name, email, admin}:ICreateUserDTO): void;
 findByEmail(email: string):any;
 findById(id: string):any;
 list():User[];
}

export { IUsersRepository,ICreateUserDTO }