const productos = {
  p1: { id: "p1", nombre: "Teclado mecánico", precio: 150000 },
  p2: { id: "p2", nombre: "Mouse inalámbrico", precio: 80000 },
  p3: { id: "p3", nombre: "Monitor 24 pulgadas", precio: 650000 },
  p4: { id: "p4", nombre: "Audífonos Bluetooth", precio: 120000 },
};
 const numerosConDuplicados = [10, 20, 20, 30, 40, 40, 40, 50];
const numerosUnicos = new Set(numerosConDuplicados);
 
// Mostramos el contenido del Set para comprobar que ya no hay duplicados
console.log("Set sin duplicados:", numerosUnicos);
// Agregamos un nuevo número al Set con .add()
numerosUnicos.add(60);
console.log("Set después de agregar 60:", numerosUnicos);
// Verificamos si un número específico existe dentro del Set con .has()
const existeNumero30 = numerosUnicos.has(30);
console.log("¿El número 30 existe en el Set?", existeNumero30);
// Eliminamos un número del Set con .delete()
numerosUnicos.delete(20);
console.log("Set después de eliminar el 20:", numerosUnicos);
// Recorremos el Set con un for...of para mostrar cada valor individual
console.log("Recorriendo el Set con for...of:");
for (const numero of numerosUnicos) {
  console.log(`  Valor: ${numero}`);
}
