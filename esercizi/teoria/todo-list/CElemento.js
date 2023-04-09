class CElemento{
    constructor(content){
        this.content = document.getElementById("testo").value;
        this.nEl = 0;
    }

    aggiungi(){
        const vettNum = document.getElementsByTagName("td");

        vettNum[this.nEl].style.visibility = "visible";
        this.nEl++;

        vettNum[this.nEl].innerHTML = this.content;
        vettNum[this.nEl].style.visibility = "visible";
        this.nEl++;

        vettNum[this.nEl].style.visibility = "visible";
    }
}