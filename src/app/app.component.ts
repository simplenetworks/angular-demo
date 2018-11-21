import { Prodotto } from "./models/prodotto";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Catalogo prodotti";

  elencoProdotti: Prodotto[] = [];

  prodottoCorrente: Prodotto;
  constructor() {
    this.elencoProdotti = [
      {
        nome: "Nokia 3310",
        descrizione: "Il miglior telefono al mondo",
        prezzoUnitario: 99,
        numApprezzamenti: 0
      },
      {
        nome: "iPhone XS",
        descrizione: "Aifon Tennis",
        prezzoUnitario: 9999,
        numApprezzamenti: 0
      },
      {
        nome: "iPhone XS Max",
        descrizione: "Aifon tennis massimiliano",
        prezzoUnitario: 999999,
        numApprezzamenti: 0
      },
      {
        nome: "Cabina Telefonica",
        descrizione: "Vintage Style",
        prezzoUnitario: 5,
        numApprezzamenti: 0
      }
    ];
  }

  aggiungiProdotto(prodotto: Prodotto) {
    this.elencoProdotti.push(prodotto);
  }

  selezionaProdotto(prodotto: Prodotto) {
    this.prodottoCorrente = prodotto;
  }

  mostraMessaggioRingraziamento(numApprezzamenti) {
    alert(`Grazie per aver espresso il tuo apprezzamento per l'articolo! 
    \n Il numero di apprezzamenti raggiunti è ${numApprezzamenti}`);
  }
}
