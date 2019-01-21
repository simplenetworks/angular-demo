import { Prodotto } from "./../models/prodotto";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProdottiService } from "../services/prodotti.service";

@Component({
  selector: "app-add-prodotto",
  templateUrl: "./add-prodotto.component.html",
  styleUrls: ["./add-prodotto.component.css"]
})
export class AddProdottoComponent {
  prodottoForm: FormGroup;

  constructor(fb: FormBuilder, private prodottiService: ProdottiService) {
    this.prodottoForm = fb.group({
      nome: ["", [Validators.required, Validators.maxLength(30)]],
      prezzo: ["", Validators.required],
      descrizione: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(150)]]
    });
  }

  aggiungiProdotto() {
    console.log(this.prodottoForm.value);
    let prodotto = new Prodotto();
    prodotto.nome = this.prodottoForm.value.nome;
    prodotto.descrizione = this.prodottoForm.value.descrizione;
    prodotto.prezzoUnitario = this.prodottoForm.value.prezzo;
    //this.nuovo.emit(prodotto);ù
    this.prodottiService.aggiungiProdotto(prodotto);
  }
}
