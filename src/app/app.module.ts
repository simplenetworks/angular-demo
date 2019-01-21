import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule, MatToolbarModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule } from "@angular/material";

import { AddProdottoComponent } from "./add-prodotto/add-prodotto.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListaProdottiComponent } from "./lista-prodotti/lista-prodotti.component";
import { ProdottoComponent } from "./prodotto/prodotto.component";
import { TruncatePipe } from "./truncate.pipe";

@NgModule({
  declarations: [AppComponent, ProdottoComponent, ListaProdottiComponent, AddProdottoComponent, TruncatePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
