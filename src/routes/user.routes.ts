import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { listUserController } from "../modules/users/useCases/listUser";


const userRoutes = Router();

userRoutes.post("/", (request, response) => {
 return createUserController.handle(request, response);
})

userRoutes.get("/", (request, response) => {
 return listUserController.handle(request, response);
})



export { userRoutes }