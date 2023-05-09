class CElemento{
    constructor(){
        this.nEl = 0;
    }

    aggiungi(){
        let testo = document.getElementById("testo").value;
        const vettNum = document.getElementsByTagName("td");

        vettNum[this.nEl].style.visibility = "visible";
        this.nEl++;

        vettNum[this.nEl].innerHTML = testo;
        vettNum[this.nEl].style.visibility = "visible";
        this.nEl++;

        vettNum[this.nEl].style.visibility = "visible";
        this.nEl++;
    }
}