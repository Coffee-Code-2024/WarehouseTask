import { Router } from "express";
import { create, get, modify, deleteTask } from "./task.controller.js";
import { validateJwt } from "../middlewares/validate-jwt.js";

const api = Router();

//=========================//
//      Rutas Privadas    //
//=======================//

api.post('/create', [validateJwt], create);
api.get('/get', [validateJwt], get);
api.put('/modify', [validateJwt], modify);
api.delete('/delete', [validateJwt], deleteTask);