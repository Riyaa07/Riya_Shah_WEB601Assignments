import { Component, OnInit } from '@angular/core';
import{Content} from '../models/content'
import { FoodService } from '../services/food.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  

  // constructor() { }

  // ngOnInit(): void {
  // }
 
  FoodItem: Content[];
  // FoodItemList : Content[];

  newContentItem: Content = {
    id: 1,
    author: 'Riya',
    imageLink: '',
    title: 'Restuarant',
    type: 'food',
    name: ''
  }

  constructor(private FoodService: FoodService) {
  
    this.FoodItem = [];

    // this. FoodIte = [];

  }

  
  ngOnInit(): void {
    this.FoodService.getContent().subscribe(FoodServiceArray =>
      this.FoodItem = FoodServiceArray);
    }

  output = "";
  display(areaMessage:string)
  {
    let authorName = <HTMLInputElement>document.getElementById('area');
    this.FoodItem.forEach(i => {
      if(i.author == areaMessage)
      {
        this.output = `The Food Item of Author ${areaMessage} exists`
        authorName.style.color = "blue";
        return  this.output; 
      }
      else
      {
        this.output = `The Food Item of Author ${areaMessage} dosen't exists`;
        authorName.style.color = "grey";
        return  this.output; 
      }
    })
  }

  
  
}


