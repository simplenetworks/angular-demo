import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Prodotto } from "./models/prodotto";
import { ProdottiService } from "./services/prodotti.service";

@Injectable()
export class ProdottoResolver implements Resolve<Prodotto> {
  constructor(private prodottiService: ProdottiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Prodotto {
    let index = route.params["index"];
    return this.prodottiService.getProdotto(index);
  }
}
