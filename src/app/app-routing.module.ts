import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddProdottoComponent } from "./add-prodotto/add-prodotto.component";
import { ListaProdottiComponent } from "./lista-prodotti/lista-prodotti.component";
import { ProdottoComponent } from "./prodotto/prodotto.component";

const routes: Routes = [
  {
    path: "",
    component: ListaProdottiComponent
  },
  {
    path: "nuovo-prodotto",
    component: AddProdottoComponent
  },
  {
    path: "edit-prodotto/:index",
    component: ProdottoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
