/*17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/

let Idade = Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
let Nome = Array("la", "lo", "li", "te", "o", "r", "oi", "uy", "io")
let IdadeFilter = Idade.filter(num => num < 5)

for(let i = 0; i < IdadeFilter.length; i++){
    //console.table(Idade.filter(num => num < 5))
    IdadeFilter[i] = Nome[i]
    
}
console.table(IdadeFilter)