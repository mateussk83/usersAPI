import express from "express";
import { router } from "./routes";
import { userRoutes } from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use(userRoutes);

app.listen(3333)