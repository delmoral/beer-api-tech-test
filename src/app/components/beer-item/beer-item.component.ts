import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent {
  @Input() beerItem!: Beer;

  constructor() { }
}
