import { ProdottiService } from "./services/prodotti.service";
import { Prodotto } from "./models/prodotto";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Catalogo prodotti";

  prodottoCorrente: Prodotto;
  constructor(private prodottiService: ProdottiService) {}

  get elencoProdotti() {
    return this.prodottiService.listaProdotti();
  }

  aggiungiProdotto(prodotto: Prodotto) {
    this.prodottiService.aggiungiProdotto(prodotto);
  }

  selezionaProdotto(prodotto: Prodotto) {
    this.prodottoCorrente = prodotto;
  }

  mostraMessaggioRingraziamento(numApprezzamenti) {
    alert(`Grazie per aver espresso il tuo apprezzamento per l'articolo! 
    \n Il numero di apprezzamenti raggiunti è ${numApprezzamenti}`);
  }
}
