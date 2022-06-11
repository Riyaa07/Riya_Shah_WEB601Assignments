import { Component, OnInit } from '@angular/core';
import{Content} from '../models/content'

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
 

  constructor() {

    

    this.FoodItem = [];

  }
  ngOnInit(): void {
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


