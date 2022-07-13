import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {

  
  FoodItem: Content = {
    name: "",
    body: "",
    id: null,
    title: '',
    author: '',
    type: ''
  };

  isShown: boolean = false ;
  tempTags: string = '';
  constructor(private FoodService: FoodService) { }

  ngOnInit(): void {
  }

  addContentToServer(): void {
    this.FoodItem.hashtags = this.tempTags.split(", ");
    this.FoodService.addContentItem(this.FoodItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }
  updateContentOnServer(): void {
    this.isShown = true ;
    this.FoodItem.hashtags = this.tempTags.split(", ");
    this.FoodService.updateContent(this.FoodItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.FoodItem)
       );
       this.isShown != this.isShown;
  }

}
