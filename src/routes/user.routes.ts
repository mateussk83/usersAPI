import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { listUserController } from "../modules/users/useCases/listUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";


const userRoutes = Router();

userRoutes.post("/users", (request, response) => {
 return createUserController.handle(request, response);
})

userRoutes.get("/users", (request, response) => {
 return listUserController.handle(request, response);
})

userRoutes.get("/user", (request, response) => {
 return showUserProfileController.handle(request, response);
})



export { userRoutes }