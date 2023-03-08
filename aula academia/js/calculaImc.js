//console.log serve para visualizar no navegador o cod (echo somente no console)
// variáveis let, var e const (usar sempre let)
//textContent um valor que vc coloca dentro
//document.querySelector = seleciona a tag ou class como preferir
//document.querySelectorAll chama tds as tag com o nome(ex PACIENTE. Vai chamar tds as tag com o valor/nome Paciente)
//length ver quantos vetor tem com essa tag
//toFixed modificar as classes decimais
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//------------------------------------------------------
let pacientes = document.querySelectorAll('.paciente')
// console.log(pacientes)


for(let i = 0; i <= pacientes.length;i++){
    let paciente = pacientes[i]

    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent


let imcTd = paciente.querySelector('.info-imc')
let imc = calculaImc (peso, altura)
imcTd.textContent = imc
}


function calculaImc(peso, altura){
    let imc = 0
    //calculando o imc do paciente
imc = peso / (altura * altura)
return imc.toFixed(2)

}






