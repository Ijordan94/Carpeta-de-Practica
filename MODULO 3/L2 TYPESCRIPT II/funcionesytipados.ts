const nombre: string = "Ignacio";

const saludar = (name: string) => {
  return `Hola ${name}`;
};
console.log(saludar(nombre));
saludar("Maria");
saludar("Jorge");
//saludar(10); Me permitirá ejecutar la función siempre y cuando el parametro que le estoy pasando es un string.

const saludar2 = (name: string): string => {
  //=> al declarar los dos puntos luego de los parametros de la función, estoy indicando que el resultado retornará un string.
  return `Hola ${name}`;
  //return 10 => me arrojará error ya que le estoy indicando que el retorno de la función es un string.
  //al declarar el tipo de dato que retornará, string en este caso, no puedo generar ni undefined, ni null, SOLO "STRING"
};

const calcularTotal = (quantity: number, price: number): number => {
  return quantity * price;
};
calcularTotal(2, 5);
//calcularTotal("hola", 5); => si uno (o ambos) parametros no son numeros como hemos declarado en los parametros, la función arrojara un error
//calcularTotal("chau", "hola"); => igual q arriba.
