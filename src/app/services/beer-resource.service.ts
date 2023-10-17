import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BeerResourceService {
  BEER_URL = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  queryBeers(beerName?: string, yeast?: string, hops?: string, malt?: string, food?: string) {
    return this.http.get(this.BEER_URL)
  }
}


/**
|beer_name|string|All beers by name|
|yeast|string|All beers by yeast|
|hops|string|All beers by hops|
|malt|string|All beers by malt|
|food|string|All beers by food|
 */