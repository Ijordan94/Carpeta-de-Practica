import { Request, Response } from "express";
import {
  getUsersService,
  createUserService,
  deleteUserService,
} from "../services/userService";
import IUser from "../interfaces/IUser";

export const getUsers = async () => {};

export const createUser = async (req: Request, res: Response) => {
  //siempre corroborar en req y res, seleccionar que Request y Response sean efectivamente las de express y no otras
  const { name, email, active } = req.body;
  const newUser: IUser = await createUserService({ name, email, active });
  res.status(201).json(newUser);
};

export const deleteUser = async () => {};
