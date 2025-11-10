/*21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

function PesoIdeal(Altura, Sexo){
 PesoHomem = 72.7 * Altura - 58
 PesoMulher = 62.1 * Altura - 44.7
 if(Sexo == "homem") return PesoHomem 
 else  return PesoMulher
}
let idealPeso = PesoIdeal(1.73, "homem")
console.log(idealPeso)