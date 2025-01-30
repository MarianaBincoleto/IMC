function calcular() {
    let n1 = document.getElementById("sexo").value;
    let n3 = document.getElementById("altura");
    let n4 = document.getElementById("peso");;
    let r = document.getElementById("resultado");
    let calc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));

    console.log(n1);
    if (calc < 18) {
        r.innerHTML = "Você está abaixo do peso</br>"
        r.style = "background-color: yellow;color:black";
        r.innerHTML += calc
    }
    else if ((calc >= 18 && calc < 25) && (n1 == "F")) {
        r.innerHTML = "Peso Ideal 18-25 </br> Parabéns! Você está dentro do peso ideal. Continue mantendo hábitos saudáveis, como uma alimentação equilibrada e a prática regular de atividades físicas, para garantir seu bem-estar e qualidade de vida. <br>"
        r.style = "background-color: green;color:white";
        r.innerHTML += calc
    }
    else if ((calc >= 18 && calc < 25) && (n1 == "M")) {
        r.innerHTML = "Peso Ideal 18-25 </br> Parabéns! Você está dentro do peso ideal. Continue mantendo hábitos saudáveis, como uma alimentação equilibrada e a prática regular de atividades físicas, para garantir seu bem-estar e qualidade de vida. <br>"
        r.style = "background-color: green;color:white";
        r.innerHTML += calc
    }
    else if (calc >= 25 && calc < 30) {
        r.innerHTML = "Sobrepeso 25-30 </br> Cuidado! Por mais que seus exames estejam bons, é hora de prestar atenção a sua saúde. <br>"
        r.style = "background-color: red;color:white";
        r.innerHTML += calc
    }
    else if (calc >= 30 && calc < 35) {
        r.innerHTML = "Obesidade moderada 30-35 </br> Atenção! O excesso de peso pode aumentar os riscos para a sua saúde. Busque acompanhamento médico e adote hábitos saudáveis para melhorar sua qualidade de vida. <br>"
        r.style = "background-color: red;color:white";
        r.innerHTML += calc
    }
    else if (calc >= 35 && calc < 40) {
        r.innerHTML = "Obesidade grave 35-40 </br> Seu peso está em um nível que pode impactar significativamente sua saúde. É fundamental procurar um profissional de saúde para orientações e mudanças no estilo de vida. <br>"
        r.style = "background-color: red;color:white";
        r.innerHTML += calc
    }
    else {
        r.innerHTML = "Obesidade gravíssima +40 </br> Risco alto! Seu peso pode estar comprometendo seriamente sua saúde. Procure ajuda médica o quanto antes para evitar complicações e melhorar seu bem-estar. <br>"
        r.style = "background-color: red; color:white";
        r.innerHTML += calc
    }

}