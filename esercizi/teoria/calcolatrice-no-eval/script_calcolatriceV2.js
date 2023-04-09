function clearDisplay(){
    document.getElementById("uno").innerHTML = "";
}

function calculate(value){
    let variabile = 0;
    if(value != "-1"){
        document.getElementById("uno").innerHTML += value;
        if(value == "+"){
            variabile += document.getElementById("uno").innerHTML;
        }
        else if(value == "-"){
            variabile -= document.getElementById("uno").innerHTML;
        }
        else if(value == "*"){
            variabile *= document.getElementById("uno").innerHTML;
        }
        else if(value == "/"){
            variabile /= document.getElementById("uno").innerHTML;
        }
    }
    else{
        let segno = document.getElementById("uno").innerHTML.charAt(1);
        let x = Number(document.getElementById("uno").innerHTML.charAt(0));
        let y = Number(document.getElementById("uno").innerHTML.charAt(2));

        if(segno == "+"){
            document.getElementById("uno").innerHTML = x + y;
        }
        else if(segno == "-"){
            document.getElementById("uno").innerHTML = x - y;
        }
        else if(segno == "*"){
            document.getElementById("uno").innerHTML = x * y;
        }
        else if(segno == "/"){
            document.getElementById("uno").innerHTML = x / y;
        }
        else if(document.getElementById("uno").innerHTML.charAt(3) != undefined){
            alert("calcolatrice funzionante con solo due numeri");
            document.getElementById("uno").innerHTML = "";
        }
    }    
}
