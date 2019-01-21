import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProdottiService } from "./../services/prodotti.service";

@Component({
  selector: "app-lista-prodotti",
  templateUrl: "./lista-prodotti.component.html",
  styleUrls: ["./lista-prodotti.component.css"]
})
export class ListaProdottiComponent implements OnInit {
  constructor(private prodottiService: ProdottiService, private router: Router) {}

  ngOnInit() {}

  get elencoProdotti() {
    return this.prodottiService.listaProdotti();
  }
}
