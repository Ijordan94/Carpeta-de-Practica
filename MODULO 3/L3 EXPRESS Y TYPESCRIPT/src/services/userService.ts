import IUser from "../interfaces/IUser";
import IUserDTO from "../interfaces/UserDTO";

const users: IUser[] = [];

let id: number = 0;

export const getUsersService = async () => {};

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

export const deleteUserService = async () => {};
