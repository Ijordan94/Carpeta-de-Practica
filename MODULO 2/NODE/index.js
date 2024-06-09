const Repository = require("./models/Repository");

const repository = new Repository();

repository.createActivity("Correr","Es muy sano","https://img.freepik.com/vector-premium/feliz-nino-lindo-corriendo-tan-rapido_97632-4720.jpg")
repository.createActivity("Jugar al futbol","es divertido con amigos","https://media.istockphoto.com/id/1164736873/es/foto/silhouette-deportes-de-acci%C3%B3n-al-aire-libre-de-un-grupo-de-ni%C3%B1os-que-se-divierten-jugando-al.jpg?s=612x612&w=0&k=20&c=vAZoMe44x8Wd8qRadLaFBost0obIR8CUDysccwXLs4Q=")
repository.createActivity("Salir a bailar","para despejarse","https://www.udance.es/wp-content/uploads/2016/09/043-Open-Hour-17012016-1024x684.jpg")

console.log(repository.getAllActivities());