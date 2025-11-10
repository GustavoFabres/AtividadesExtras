/*20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).*/

let funcionario = Array()
funcionario ['Matrícula'] = Array(5, 6, 4, 7, 3, 8, 2,9,10)
funcionario ['Nome'] = Array(5, 6, 4, 7, 3, 8, 2,9,10)
funcionario ['Salário bruto'] = Array(5, 6, 4, 7, 3, 8, 2,9,10)
funcionario ['Dedução INSS'] = Array()
funcionario ['Salário líquido'] = Array()
console.log(funcionario['Salário bruto'].length)

for(let i = 0;i < funcionario['Salário bruto'].length; i++){
    funcionario['Dedução INSS'][i] = ((funcionario['Salário bruto'][i] * 12) / 100)
    funcionario['Salário líquido'][i] = funcionario['Salário bruto'][i] - funcionario['Dedução INSS'][i]
    //console.table(funcionario['Salário bruto'])
}

console.table(funcionario)