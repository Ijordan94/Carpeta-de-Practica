const addUserButton = document.getElementById("addUserButton");
let i = 1;

class User {
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email= email
    }
}

class Repository{
    constructor(){
        this.users = [];
        
    }
    //cuando tengo varios parametros, me conviene ponerlos entre llaves para desestructurarlo, mas adelante veremos el por que
    createUser({id, name, username, email}){
        const newUser = new User(id, name, username, email);
        this.users.push(newUser);
        
    }
}
const repository = new Repository();

const refresh = () => {
    const container = document.getElementById("usersContainer");
    usersContainer.innerHTML = "";

    const users = repository.users;
    const htmlUsers = users.map((user)=>{
        const name = document.createElement("h3");
        const email = document.createElement("p");

        name.innerHTML = user.name;
        email.innerHTML = user.email;

        const card = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);

        return card;
    })
    
    htmlUsers.forEach((card) => {
        usersContainer.appendChild(card)
    });
}



const addUser = () =>{
    if(i>10) return alert("No hay más usuarios")
    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data,status)=>{ 
        /* console.log(data); */
        i++
        //aca es donde utilizamos el haber desestructurado los parametros, ya que un objeto no tiene orden entonces puedo ponerlo en el orden que quiera
        repository.createUser(data)//debido a que data es un objeto que tiene id, username, etc, no es necesario pasarle los parametros uno por uno. Como en la funcion create user le pase un objeto, ahora simplemente se encargará de desestructurarlo y utilizar lo que la funcion le está solicitando. 
        refresh();
    })
}
addUserButton.addEventListener("click",addUser)
//esto hasta aca hará que, al apretar en el boton agregar usuario, me genere en la consola un array con 1 click 1 usuario, segundo click 2 usuarios, etc. 

