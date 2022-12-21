import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const createUserRepository = UsersRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(createUserRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }