import { ProdottiService } from "./../services/prodotti.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Prodotto } from "../models/prodotto";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-prodotto",
  templateUrl: "./prodotto.component.html",
  styleUrls: ["./prodotto.component.css"]
})
export class ProdottoComponent implements OnInit {
  prodotto: Prodotto;
  @Output()
  like = new EventEmitter<number>();

  quantita: number = 0;

  constructor(private route: ActivatedRoute, private prodottiService: ProdottiService) {}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.prodotto = this.prodottiService.getProdotto(params["index"]);
    // });
    this.prodotto = this.route.snapshot.data.prodotto;
  }

  incrementaApprezzamenti(event) {
    this.prodotto.numApprezzamenti = this.prodotto.numApprezzamenti + 1;
    event.preventDefault();
    this.like.emit(this.prodotto.numApprezzamenti);
  }
}
