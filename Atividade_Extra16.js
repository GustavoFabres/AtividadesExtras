/*Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.*/

let NumerosAleatórios = Array()

function Randomico(R, Ra){
         return Math.floor(Math.random() * (Ra - R + 1)) + R
   }

   let Ran = Randomico(0, 99)
   for(let i = 0; i < 20; i++){
    NumerosAleatórios[i] = Randomico(0, 99)
   }
   console.log(Ran)
   console.table(NumerosAleatórios.sort((a , b) => a - b))
   