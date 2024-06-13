const axios = require ("axios");

console.log(axios.get("https://students-api.up.railway.app/movies"));/*me da una promesa*/

axios.post("https://students-api.up.railway.app/movies",{ //por ejemplo si quiero enviar informacion de una pelicula. primer argumento la url, segundo argumento QUÉ mando
    title: "Lo que el viento se llevo",
    year: "XXXX"
})
axios.put("urlDestino"{ /*objeto con propiedades*/ });

axios.delete("urlDestino"/*un 2° argumento qeu aún no explico*/)