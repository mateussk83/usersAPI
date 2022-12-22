import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUserController } from "./listUserController";
import { ListUserUseCase } from "./listUserUseCase";



const usersRepository = UsersRepository.getInstance()

const listUserUseCase  = new ListUserUseCase(usersRepository)

const listUserController = new ListUserController(listUserUseCase)

export { listUserController }