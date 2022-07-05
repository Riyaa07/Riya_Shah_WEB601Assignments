import { Component, OnInit } from '@angular/core';
import {Content} from '../models/content';
import { FoodService } from '../services/food.service';
import { DEFAULTFoodItem } from '../data/mock-Food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
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
