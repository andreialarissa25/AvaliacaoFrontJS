//exercicio2
function exercicio2() {
    alert("teste exercicio2")
    const valorHora= Number("digite da hora")
    const Horatrabalhada=Number (prompt("digite o valor horas trabalhadas"))
    const resultado= valorHora + Horatrabalhada

    alert("seu salario e + resultado")


const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => {exercicio2()})

}

