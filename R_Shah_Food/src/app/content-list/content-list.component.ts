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

    this.FoodItem = [{
      id:0,
      name: 'Ice cream',
      title: 'Baskin Robbins',
      body: 'It is an cotton candy and rocky roads',
      author: 'Riya Shah',
      imageLink: 'https://5.imimg.com/data5/SELLER/Default/2020/10/SB/SU/BK/23510599/baskins-and-robbins-500x500.jpg',
      type: 'Icecream',
      hashtags:['summertime']
    }, {
      id:1,
      name: 'Nachos',
      title: '3 Aminos resturant',
      body: 'It is an mexican food served with sauce',
      author: 'Riya Shah',
      imageLink: 'https://img.restaurantguru.com/rc8d-3-Amigos-Boucherville-meals.jpg',
      type: 'Mexican',
      hashtags:['foood']
    }, {
      id:2,
      name: 'Waffle',
      title: 'Snowflake Luxary Gelato',
      body: 'It is an made up of berries nad maple syrup',
      author: 'Riya Shah',
      imageLink: 'https://d1ralsognjng37.cloudfront.net/16b8216c-69cc-4cd6-8fbd-620b1a03c0f7.jpeg',
      type: 'Icecreams',
      hashtags:['lodondiaries']
    }, {
      id:3,
      name: 'Manchurian sizzler',
      title: 'Kyuchina Restro Cafe',
      body: 'It is an made up of fried rice , fries, manchurian and panner',
      author: 'Riya Shah',
      imageLink: 'https://www.cityshor.com/uploads/article/07_2017/1499942978_web_5.jpg',
      type: 'Indo-Chinese',
      hashtags:['indianfood']
    },{
      id:4,
      name: 'Strawberry cheesecake',
      title: 'Moms Cafe',
      body: 'It is an made up of cream cheese and strawberry and vanilla',
      author: 'Riya Shah',
      imageLink: 'https://www.thespruceeats.com/thmb/NOA0gyPkqU0Tu5kp-smimgROa7g=/1422x1422/smart/filters:no_upscale()/strawberry-cheesecake-4588014-03-5a5769c5f121456c8b4aa5c7c6e06f61.jpg',
      type: 'Cakes',
      hashtags:['pastry']
    },{
      id:5,
      name: 'Pav bhaji',
      title: 'Hocco',
      body: 'It is mix vegetable',
      author: 'Riya Shah',
      imageLink: 'https://pipingpotcurry.com/wp-content/uploads/2018/09/Pav-Bhaji-500x500.jpg',
      type: 'Sabji',
      hashtags:['vegetable']
    },{
      id:6,
      name: 'Spring rolls',
      title: 'Tomatoes',
      body: 'It is an made up of spring veggies',
      author: 'Riya Shah',
      imageLink: 'https://indianvegrecipe.com/wp-content/uploads/2020/01/spring-rolls-recipe.jpg',
      type: 'Chinese',
      hashtags:['delicious']
    },{
      id:7,
      name: 'CupCake & coffee',
      title: 'peggy porschen',
      body: 'It is an pink theme food and resturant',
      author: 'Riya Shah',
      imageLink: 'https://i.pinimg.com/736x/f3/c0/ba/f3c0ba66955398a91ce4e1b49c8c7326.jpg',
      type: '',
      hashtags:['pastry']
    }];

  }
  ngOnInit(): void {
    }
}


