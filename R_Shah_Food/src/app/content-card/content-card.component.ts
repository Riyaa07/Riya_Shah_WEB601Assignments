import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  clickImage(){
    console.log(`The id is ${this.FoodItem?.id} and author is ${this.FoodItem?.author}`)
  }
  
  @Input() FoodItem?: Content;
  showImage: boolean;
  constructor() { 
    this.showImage = false;
  }
  
  ngOnInit(): void {
    
  }

}


