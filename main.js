const form = document.getElementById('formulario');
const resultado = document.getElementById('resultado');


form.addEventListener("submit", event => {

    event.preventDefault()

    const A = +event.target.elements["input-A"].value;
    const B = +event.target.elements["input-B"].value;

    const operador = event.target.elements["operador"].value;


    console.log(event.target.elements["operador"].value);

    if (operador == ">"){
        resultado.value = `${A>B}`
    }else if (operador == "<"){
        resultado.value = `${A<B}`
    }else if (operador == "<="){
        resultado.value = `${A<=B}`
    }else if (operador == ">="){
        resultado.value = `${A>=B}`
    }else if (operador == "="){
        resultado.value = `${A==B}`
    }else if (operador == "+"){
        resultado.value = `${A+B}`
    }else if (operador == "-"){
        resultado.value = `${A-B}`
    }else if (operador == "*"){
        resultado.value = `${A*B}`
    }else{
        resultado.value = `${A/B}`
    }
})