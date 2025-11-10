/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/

let matris = []
let matrisSoma = [4]
let Soma = 0
for( i = 0 ; i < 10 ; i++){
   matris[i] = []

   for(let j = 0 ; j < 10 ; j++){
      matris[i][j] = Math.floor(Math.random() * (0 - 10 + 1)) + 10
     
   
}

}
 console.table(matris)
for( i = 0 ; i < 10 ; i++){

      for(let j = 0 ; j < 10 ; j++){
        Soma = matris[j].reduce((acumulador , valor) => acumulador + valor, 0)
    if(i == j){ 
        //console.log(Soma);
        matrisSoma[j] = Soma;
    }
        else matris[i][j] = 0 
   }
   
}
console.table(matrisSoma.reduce((acumulador , valor) => acumulador + valor, 0))
