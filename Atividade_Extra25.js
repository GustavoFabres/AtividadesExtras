/*25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.*/

let matris = []
let Soma = 0

for( i = 0 ; i < 20 ; i++){
   matris[i] = []

   for(let j = 0 ; j < 15 ; j++){
      matris[i][j] = Math.floor(Math.random() * (0 - 10 + 1)) + 10
   }
   

}
console.table(matris)
for(let y = 0 ; y < 15 ; y++){
        console.log(matris[y].reduce((acumulador , valor) => acumulador + valor, 0))  
 }
