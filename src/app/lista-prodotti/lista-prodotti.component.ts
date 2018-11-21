import { Prodotto } from "./../models/prodotto";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-lista-prodotti",
  templateUrl: "./lista-prodotti.component.html",
  styleUrls: ["./lista-prodotti.component.css"]
})
export class ListaProdottiComponent implements OnInit {
  @Input()
  elencoProdotti: Prodotto[];

  @Output()
  select = new EventEmitter<Prodotto>();

  constructor() {}

  ngOnInit() {}

  scegliProdotto(prodotto: Prodotto) {
    this.select.emit(prodotto);
  }
}
