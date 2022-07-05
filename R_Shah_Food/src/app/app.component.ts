//import { Content } from '@angular/compiler/src/render3/r3_ast';

import { Component } from '@angular/core';
import {Content} from './models/content';
import { FoodService } from './services/food.service';
import { DEFAULTFoodItem } from './data/mock-Food';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'R_Shah_Food';
  individualFood: Content = DEFAULTFoodItem;

  constructor(private FoodService: FoodService) {

  }

  ngOnInit(): void {
    // getContentItem test
    this.FoodService.getContentItem(1).subscribe(FoodSingleItem => {
      console.log("App component - Got the content item: ", FoodSingleItem);
      this.individualFood = FoodSingleItem;
    });

  }

  
  checkForIdInList(idValue: string): void {
    this.FoodService.getContentItem(Number(idValue)).subscribe(FoodSingleItem => {
      console.log("App component - Got the content item AGAIN: ", FoodSingleItem);
      this.individualFood = FoodSingleItem;
    });
  }
}
