import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Prodotto } from "../models/prodotto";

@Component({
  selector: "app-prodotto",
  templateUrl: "./prodotto.component.html",
  styleUrls: ["./prodotto.component.css"]
})
export class ProdottoComponent implements OnInit {
  @Input()
  prodotto: Prodotto;
  @Output()
  like = new EventEmitter<number>();

  quantita: number = 0;

  constructor() {}
  ngOnInit() {}

  incrementaApprezzamenti(event) {
    this.prodotto.numApprezzamenti = this.prodotto.numApprezzamenti + 1;
    event.preventDefault();
    this.like.emit(this.prodotto.numApprezzamenti);
  }
}
