import { CCella } from "./CCella.js";

export class CCampo{
    constructor(righe, colonne){
        this.campo = [];
        this.numBombe = 10;
        this.righe = righe;
        this.colonne = colonne;
        this.numFlag = 0;

        for(let i = 0; i < righe; i++){
            this.campo[i] = [];

            for(let k = 0; k < colonne; k++){
                const cella = new CCella();
                this.campo[i][k] = cella;
            }
        }
    }

    //posiziona le bombe nel campo
    inizializzaBombe(){
        //contatore che conta le bombe piazzate
        let conta = 0;
        //riga random dove posiziono le bombe
        let randRiga = 0;
        //colonna random dove posizione le bombe
        let randColonna = 0;

        //esegue il ciclo fino a quando non ha piazzato tutte le bombe
        while(conta != this.numBombe){

            //genero una riga e una colonna random dove mettere la bomba
            //se nella pos generata c'è una bomba, rigenero la pos
            do{
                randRiga = Math.floor(Math.random() * this.righe);
                randColonna = Math.floor(Math.random() * this.colonne);
            }while(this.campo[randRiga][randColonna].bomba != false);

            this.campo[randRiga][randColonna].bomba = true;
            this.campo[randRiga][randColonna].bombeVicine = -1;
            conta++;
        }
    }

    contaBombeVicine(riga, colonna){
        let conta = 0;

        //controllo se ci sono bombe nella riga superiore
        if(this.campo[riga-1] && this.campo[colonna-1] && this.campo[riga-1][colonna-1].bomba){
            conta++;
        }
        if(this.campo[riga-1] && this.campo[colonna] && this.campo[riga-1][colonna].bomba){
            conta++;
        }
        if(this.campo[riga-1] && this.campo[colonna+1] && this.campo[riga-1][colonna+1].bomba){
            conta++;
        }


        if(this.campo[riga] && this.campo[colonna-1] && this.campo[riga][colonna-1].bomba){
            conta++;
        }
        if(this.campo[riga] && this.campo[colonna+1] && this.campo[riga][colonna+1].bomba){
            conta++;
        }


        if(this.campo[riga+1] && this.campo[colonna-1] && this.campo[riga+1][colonna-1].bomba){
            conta++;
        }
        if(this.campo[riga+1] && this.campo[colonna] && this.campo[riga+1][colonna].bomba){
            conta++;
        }
        if(this.campo[riga+1] && this.campo[colonna+1] && this.campo[riga+1][colonna+1].bomba){
            conta++;
        }

        return conta;
    }

    //mette il numero in ogni casella in base alle bombe vicine
    inizializzaNumeri(){
        //scorro tutta la matrice
        for(let i = 0; i < this.righe; i++){
            for(let k = 0; k < this.colonne; k++){
                this.campo[i][k].bombeVicine = this.contaBombeVicine(i, k);
            }
        }
    }

    //controlla a cosa corrisponde la cella cliccata dall'utente
    controllaClick(riga, colonna, check){

        //tasto sinistro
        if(check == 1){
            //se c'è un flag, lo toglie
            if($(".cella[data-riga='" + riga + "'][data-colonna='" + colonna + "']").css("background-image") === "none"){
                //controlla se c'è una bomba
                if(this.campo[riga][colonna].bomba == true){
                    alert("bomba, hai perso");
        
                    //prende l'elemento selezionato e cambia lo sfondo in rosso per indicare che è una bomba
                    $(".cella[data-riga='" + riga + "'][data-colonna='" + colonna + "']").css("background-color", "#B71C1C");
                    
                    //procedura che finisce il gioco, es lo riavvia
                    
                }
                else{
                    //metodo easy
                    //visualizzo il numero dentro alla casella di quante bombe ha vicino
                    if(this.campo[riga][colonna].bombeVicine != 0){
                        $(".cella[data-riga='" + riga + "'][data-colonna='" + colonna + "']").text(this.campo[riga][colonna].bombeVicine);
                        $(".cella[data-riga='" + riga + "'][data-colonna='" + colonna + "']").css("background-color", "#FFF59D");
                    }
                    else{
                        $(".cella[data-riga='" + riga + "'][data-colonna='" + colonna + "']").css("background-color", "#FFFFFF");
                    }
                }
            }
            else{
                $(".cella[data-riga='" + riga + "'][data-colonna='" + colonna + "']").css("background-image", "none");
                this.numFlag--;
            }
        }
        //tasto destro
        else{
            if(this.numFlag < this.numBombe){
                //copiato da internet per evitare che compaia il menu del browser raggiungibile tramite tasto destro
                $(".cella[data-riga='" + riga + "'][data-colonna='" + colonna + "']").css("background-image", "url(images/flag.png)").on("contextmenu", function(event){
                    event.preventDefault();
                });

                this.numFlag++;
            }
            else{
                alert("numero massimo di flag raggiunto");
            }

        }

    }
}