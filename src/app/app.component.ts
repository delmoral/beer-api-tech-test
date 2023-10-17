import { Component, OnInit } from '@angular/core';
import { BeerResourceService } from './services/beer-resource.service';
import { Beer } from './models/beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  beersList: Beer[] = [];
  query = '';

  constructor(private beerResource: BeerResourceService) { }

  ngOnInit() {
    this.filterBeers()
  }

  filterBeers() {
    this.beerResource.genericSearchBeers(this.query).subscribe((response: Beer[]) => {
      this.beersList = response;
    })
  }
}
