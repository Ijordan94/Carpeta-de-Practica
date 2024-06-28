/* interface IUser {
  //siempre que trabajo con una interfaz, la primer letra antes del nombre de la misma es una I.En este caso IUser.
  name: string;
  age: number;
  email: string;
  active: boolean;
  adress: IAdress; //lo detallo más abajo.
} */

/* interface IAdress {
  street: string;
  city: string;
  country: string;
} */

/* const usuario1: IUser = {
  name: "Ignacio",
  age: 29,
  email: "ignacio@mail.com",
  active: true,
  adress: {
    street: "Calle 123",
    city: "Tucuman",
    country: "Argentina",
  },
};
 */

/* enum UserRole {
  //aca tenemos que indicar cuales son los valores posibles, es decir, para el USERROLE, solo se admiten estos valores planteados.
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}
type TUser = {
  //asi como en la interfaz es buena practica indicarla con una I, en los tipos se indica con una T masyuscula.
  name: string;
  age: number;
  email: string;
  active: boolean;
  adress: IAdress;
  role: UserRole; //role=> pueden ser, admin,user,etc...
};

const user1: TUser = {
  name: "Ignacio",
  age: 29,
  email: "ignacio@mail.com",
  active: true,
  adress: {
    street: "Calle 123",
    city: "Tucuman",
    country: "Argentina",
  },
  role: UserRole.ADMIN,
}; */

interface IUser {
  name: string;
  email: string;
  age: number;
}

interface IAdminUser extends IUser {
  adminSince: Date;
}

interface IGuestUser extends IUser {
  active: boolean;
}

const user1: IAdminUser = {
  name: "Ignacio",
  email: "ignacio@mail.com",
  age: 29,
  adminSince: new Date(),
};

const user2: IGuestUser = {
  name: "Maria",
  email: "maria@mail.com",
  age: 30,
  active: true,
};
console.log(user1);
console.log(user2);
