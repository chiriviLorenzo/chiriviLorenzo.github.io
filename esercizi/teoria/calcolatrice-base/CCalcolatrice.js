class calcolatrice {
    constructor(){
        this.primoNum = 0;
        this.secondoNum = 0;
        this.flag = false;
    }

    addToDisplay(value){
        if(this.flag){
            document.getElementById("uno").innerHTML = "";
        }
        document.getElementById("uno").innerHTML += value;
    }

    operatorsClick(operatore){
        this.secondoNum = document.getElementById("uno").innerHTML;
        if(operatore == "+"){
            this.primoNum += this.secondoNum;
        }
        else if(operatore == "-"){
            this.primoNum -= this.secondoNum;
        }
        else if(operatore == "*"){
            this.primoNum *= this.secondoNum;
        }
        else if(operatore == "/"){
            this.primoNum /= this.secondoNum;
        }

        document.getElementById("uno").innerHTML = this.primoNum;
        this.flag = !this.flag;
    }

    calculate(){

    }

    clearDisplay(){
        document.getElementById("uno").innerHTML = "";
        this.primoNum = 0;
        this.secondoNum = 0;
        this.flag = false;
    }
}