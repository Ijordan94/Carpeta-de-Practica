"use strict";
/* interface IUser {
  //siempre que trabajo con una interfaz, la primer letra antes del nombre de la misma es una I.En este caso IUser.
  name: string;
  age: number;
  email: string;
  active: boolean;
  adress: IAdress; //lo detallo más abajo.
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
var UserRole;
(function (UserRole) {
    //aca tenemos que indicar cuales son los valores posibles, es decir, para el USERROLE, solo se admiten estos valores planteados.
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["GUEST"] = "guest";
})(UserRole || (UserRole = {}));
const user1 = {
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
};
