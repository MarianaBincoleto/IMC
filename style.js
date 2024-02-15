function calcular(){
    let n1 = document.getElementById("n1").value;
	let n3 = document.getElementById("n3");
	let n4 = document.getElementById("n4");;
	let r = document.getElementById("resultado");
    let calc = parseFloat(n4.value) / (parseFloat(n3.value)*parseFloat(n3.value));

    console.log(n1);
    if (calc<18){
        r.innerHTML ="Você está abaixo do peso</br>"
        r.style = "background-color: yellow;color:black";
        r.innerHTML += calc
    }
    else if ((calc>=18 && calc<25) && (n1=="F")){
        r.innerHTML ="Peso Ideal!</br>" 
        r.style ="background-color: green;color:black";
        r.innerHTML += calc
    }
    else if ((calc>=18 && calc<25) && (n1 =="M")){
        r.innerHTML = "Peso Ideal!</br>"
        r.style = "background-color: green;color:black";
        r.innerHTML += calc
    }
    else if (calc>=25 && calc<30){
        r.innerHTML ="Sobrepeso</br>" 
        r.style = "background-color: red;color:black";
        r.innerHTML += calc
    }
    else if (calc>=30 && calc<35){
        r.innerHTML ="Obesidade moderada</br>" 
        r.style = "background-color: red;color:black";
        r.innerHTML += calc
    }
    else if (calc>=35 && calc<40){
        r.innerHTML ="Obesidade grave</br>" 
        r.style = "background-color: red;color:black";
        r.innerHTML += calc
    }
    else {
        r.innerHTML ="Obesidade gravíssima</br>" 
        r.style = "border: 3px solid red";
        r.innerHTML += calc
    }
	
}