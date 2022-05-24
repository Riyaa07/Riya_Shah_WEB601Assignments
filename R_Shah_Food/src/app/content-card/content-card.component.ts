import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() FoodItem?: Content;
  
  constructor() { }

  ngOnInit(): void {
    // if(this.FoodItem){
    //   console.log(this.FoodItem.id);
    //   console.log(this.FoodItem.title);
    //   console.log(this.FoodItem.name);
    //   console.log(this.FoodItem.body);
    // }
  }

}


