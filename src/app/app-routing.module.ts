import { ProdottoComponent } from "./prodotto/prodotto.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaProdottiComponent } from "./lista-prodotti/lista-prodotti.component";

const routes: Routes = [
  {
    path: "",
    component: ListaProdottiComponent
  },
  {
    path: "dettaglio",
    component: ProdottoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
