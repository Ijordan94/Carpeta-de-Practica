import { isUint16Array } from "util/types";
import IUser from "../interfaces/IUser";
import IUserDTO from "../interfaces/UserDTO";

let users: IUser[] = [
  {
    id: 0,
    name: "Juan",
    email: "juan",
    active: true,
  },
];

let id: number = 1;

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const createUserService = async (userData: IUserDTO): Promise<IUser> => {
  //recibir los datos el usuario
  //crear un usuario nuevo
  //agregar al usuario dentro del arreglo users
  //retornar el objeto creado.
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    active: userData.active,
  };
  users.push(newUser);
  id++;
  return newUser;
};

export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => {
    return user.id !== id;
  });
};
