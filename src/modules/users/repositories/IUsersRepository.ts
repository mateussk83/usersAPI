
interface ICreateUserDTO {
 name: string;
 email: string;
 admin: boolean;
}


interface IUsersRepository {
 create({name, email, admin}:ICreateUserDTO): void;
 findByEmail(email: string):any;
}

export { IUsersRepository,ICreateUserDTO }