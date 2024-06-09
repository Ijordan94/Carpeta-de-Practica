/* Destructura un objeto person para obtener las propiedades name y age. */
const person = {
    name: "Ignacio",
    age: 28
}
function mostrar ({name,age}){
    console.log(`me llamo ${name} y tengo ${age} años`);
}
mostrar(person)
/* mostrar(person);
/* /* Destructura un array [x, y] para obtener sus dos elementos. */
/* const miArray = [x,y];
const [primero,segundo] = miArray
console.log(primero);
console.log(segundo);  */
/* Destructura un objeto anidado para obtener una propiedad interna.
Destructura un objeto rectangle para obtener las propiedades width y height.
Destructura un array [first, , last] para obtener el primer y último elemento.
Destructura un objeto car para obtener las propiedades make, model y year.
Destructura un objeto user para obtener la propiedad name y renómbrala como userName.
Destructura un objeto data para obtener la propiedad result de un objeto anidado.
Destructura un array [a, b, ...rest] para obtener los primeros dos elementos y el resto en un nuevo array.
Destructura un objeto student para obtener las propiedades name y grades.
Destructura un array [x, y, z] y sáltate el primer elemento.
Destructura un objeto person para obtener las propiedades firstName, lastName y age.
Destructura un objeto company para obtener la propiedad name y renómbrala como companyName.
Destructura un array [first, ...rest] para obtener el primer elemento y el resto en un nuevo array.
Destructura un objeto book para obtener la propiedad title y author.
Destructura un objeto address para obtener las propiedades city y country.
Destructura un array [x, , y, ...rest] para obtener el primer, tercer elemento y el resto en un nuevo array.
Destructura un objeto person para obtener la propiedad name y el resto en un nuevo objeto llamado details.
Destructura un array [a, [b, c]] para obtener los valores de a, b y c.
Destructura un objeto user para obtener la propiedad name y age y renómbralas como userName y userAge. */ 