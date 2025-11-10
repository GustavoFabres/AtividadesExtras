/*22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/

function PesquisaF(Salario, Filhos){
    let MediaFilhos = Filhos.reduce((acumulador , valor) => acumulador + valor, 0)/Filhos.length
    let Porcentagem = Salario.filter(num => num > 350)
    let PorcentagemAcimaDe350 = (Porcentagem.length * 100)/Salario.length + "%"
    let MaiorSalario = Salario.sort((b , a) => a - b)
    let PrimeiroSalario = MaiorSalario[0]
        return {
            PrimeiroSalario,
            MediaFilhos,
            PorcentagemAcimaDe350
        }
   
}
let pesquisa = Array()
pesquisa["Salario"] = Array()
pesquisa["Filhos"] = Array()

pesquisa["Salario"].length = 10
for(let i = 0; i < pesquisa["Salario"].length; i++){
    pesquisa["Salario"][i] = Math.floor(Math.random() * (0 - 2000 + 1)) + 2000
    pesquisa["Filhos"][i] = Math.floor(Math.random() * (0 - 10 + 1)) + 10
}
console.table(pesquisa)
let Fum = PesquisaF(pesquisa["Salario"], pesquisa["Filhos"])
console.table(Fum)

