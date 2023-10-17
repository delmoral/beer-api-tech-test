import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Beer } from '../models/beer.model';
import { zip, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { BEER_FILTER_PARAMS, BEER_URL } from '../constants/beer.constants';

@Injectable({ providedIn: 'root' })
export class BeerResourceService {

  constructor(private http: HttpClient) { }

  genericSearchBeers(query?: string) {
    if (query) {
      return zip(this.buildRequests(query)).pipe(map(x => x[0].concat(x[1])))
    } else {
      return this.http.get<Beer[]>(BEER_URL)
    }
  }

  buildRequests(query: string) {
    let requests: Observable<Beer[]>[] = []
    BEER_FILTER_PARAMS.forEach(param => {
      let params = new HttpParams();
      params = params.append(param, query);
      requests.push(this.http.get<Beer[]>(BEER_URL, { params }))
    });
    return requests
  }
}
