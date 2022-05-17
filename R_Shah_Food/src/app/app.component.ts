//import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import {Content} from './models/content';
import {List} from './models/list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'R_Shah_Food';

  dataOne:Content;
  dataTwo:Content;
  dataThree:Content;
  dataFour:Content;

  listOfContent: List = new List;

  constructor(){
    this.dataOne ={
      id:0,
      name: 'Ice cream',
      title: 'Baskin Robbins',
      body: 'It is an cotton candy and rocky roads',
      author: 'Riya Shah',
      imageLink: 'https://5.imimg.com/data5/SELLER/Default/2020/10/SB/SU/BK/23510599/baskins-and-robbins-500x500.jpg',
      type: 'Icecream',
      hashtags:['summertime']
    }
    this.dataTwo ={
      id:1,
      name: 'Nachos',
      title: '3 Aminos resturant',
      body: 'It is an mexican food served with sauce',
      author: 'Riya Shah',
      imageLink: 'https://img.restaurantguru.com/rc8d-3-Amigos-Boucherville-meals.jpg',
      type: 'Mexican',
      hashtags:['foood']
    }
    this.dataThree ={
      id:3,
      name: 'Waffle',
      title: 'Snowflake Luxary Gelato',
      body: 'It is an made up of berries nad maple syrup',
      author: 'Riya Shah',
      imageLink: 'https://d1ralsognjng37.cloudfront.net/16b8216c-69cc-4cd6-8fbd-620b1a03c0f7.jpeg',
      type: 'Icecreams',
      hashtags:['lodondiaries']
    }
    this.dataFour ={
      id:4,
      name: 'Manchurian sizzler',
      title: 'Kyuchina Restro Cafe',
      body: 'It is an made up of fried rice , fries, manchurian and panner',
      author: 'Riya Shah',
      imageLink: 'https://www.cityshor.com/uploads/article/07_2017/1499942978_web_5.jpg',
      type: 'Indo-Chinese',
      hashtags:['indianfood']
    }

    this.listOfContent.addcontent(this.dataOne);
    this.listOfContent.addcontent(this.dataTwo);
    this.listOfContent.addcontent(this.dataThree);
    this.listOfContent.addcontent(this.dataFour);
  }




}
