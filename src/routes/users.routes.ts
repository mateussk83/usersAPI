import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { listUserController } from "../modules/users/useCases/listUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/TurnUserAdmin";


const usersRoutes = Router();

usersRoutes.post("/users", (request, response) => {
 return createUserController.handle(request, response);
})

usersRoutes.get("/users", (request, response) => {
 return listUserController.handle(request, response);
})

usersRoutes.get("/users/:id", (request, response) => {
 return showUserProfileController.handle(request, response);
})

usersRoutes.patch("/users/:id/admin", (request, response) => {
 return turnUserAdminController.handle(request, response)
})


export { usersRoutes }