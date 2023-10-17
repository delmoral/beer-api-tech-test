import { Component, OnInit } from '@angular/core';
import { BeerResourceService } from './services/beer-resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  beersList: any;
  query = '';

  constructor(private beerResource: BeerResourceService) { }

  ngOnInit() {
    this.beerResource.queryBeers().subscribe(response => {
      this.beersList = response;
    })
  }
}
