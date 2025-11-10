/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/
let DezNumeros = Array (5, 6, 4, 7, 65, 53, 77, 12, 60, 54)
console.table(DezNumeros)
let ParesNumeros = DezNumeros.filter(num => num % 2 === 0)
console.table(ParesNumeros)
