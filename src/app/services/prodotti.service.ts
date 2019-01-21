import { Injectable } from "@angular/core";
import { Prodotto } from "../models/prodotto";

@Injectable({
  providedIn: "root"
})
export class ProdottiService {
  private elencoProdotti: Prodotto[] = [];

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

  listaProdotti(): Prodotto[] {
    return this.elencoProdotti;
  }

  getProdotto(index: number) {
    return this.elencoProdotti && this.elencoProdotti.length > index ? this.elencoProdotti[index] : null;
  }
}
