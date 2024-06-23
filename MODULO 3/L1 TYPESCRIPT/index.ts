const usuario = "Gamaliel";

function sayHello (user:string){
    console.log(`hello ${user.toUpperCase()}`);
    
}
sayHello(usuario);
sayHello(1);
sayHello(true);
sayHello(["no","funca"]);