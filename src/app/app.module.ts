import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProdottoComponent } from "./prodotto/prodotto.component";
import { ListaProdottiComponent } from "./lista-prodotti/lista-prodotti.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddProdottoComponent } from "./add-prodotto/add-prodotto.component";
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [AppComponent, ProdottoComponent, ListaProdottiComponent, AddProdottoComponent, TruncatePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
