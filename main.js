const form = document.getElementById('formulario');
const resultado = document.getElementById('resultado');


form.addEventListener("submit", event => {

    event.preventDefault()

    const n1 = +event.target.elements["input-A"].value;
    const n2 = +event.target.elements["input-B"].value;

    const operador = event.target.elements["operador"].value;

    if (operador == ">"){
        resultado.value = `${n1>n2}`
    }else if (operador == "<"){
        resultado.value = `${n1<n2}`
    }else if (operador == "<="){
        resultado.value = `${n1<=n2}`
    }else if (operador == ">="){
        resultado.value = `${n1>=n2}`
    }else if (operador == "="){
        resultado.value = `${n1==n2}`
    }else if (operador == "+"){
        resultado.value = `${n1+n2}`
    }else if (operador == "-"){
        resultado.value = `${n1-n2}`
    }else if (operador == "*"){
        resultado.value = `${n1*n2}`
    }else if(operador == "!="){
        resultado.value = `${n1!=n2}`
    }else{
        resultado.value = `${n1/n2}`
    }
})