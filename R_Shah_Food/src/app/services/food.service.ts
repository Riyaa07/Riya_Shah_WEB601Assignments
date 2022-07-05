import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodItem , DEFAULTFoodItem} from '../data/mock-Food';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  FoodItem: any;

  constructor() { }

  //return
  getContent(): Observable<Content[]> {
    return of(FoodItem);
  }


  //read

  // number id
  //bcz of ts2322 removed [] from content
  getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < FoodItem.length; i++) // iterate through each chess champion
    {
      if (FoodItem[i].id === id) { // found the item
        return of(FoodItem[i]);
      }
    }
    return of(DEFAULTFoodItem); // need to return something if the content isn't there
  }

  //create
  
  //array and return it
  addContentItem(newContentItem: Content): Observable<Content[]> {
    // if there aren't some chess champions with the same id number, push the array item
    if (!FoodItem.some(FoodItem => FoodItem.id === newContentItem.id)) {
      FoodItem.push(newContentItem);
    }
    return of(FoodItem);
  }

  

  //updating

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    // find item in FoodItem with same id as newcontentitem's id
    // update the values of that item in the array with the values of the newContentItem
    // return the array after updating

    FoodItem.forEach((individualFoodItem, index) => {
      // one potential solution
      // if (individualChessChampion.id === newContentItem.id) // found them
      // {
      //   individualChessChampion.title = newContentItem.title;
      //   individualChessChampion.body = newContentItem.body;
      //   individualChessChampion.author = newContentItem.author;
      //   individualChessChampion.imageLink = newContentItem.imageLink;
      //   individualChessChampion.type = newContentItem.type;
      //   individualChessChampion.hashtags = newContentItem.hashtags;
      //   // return;
      // }

      if (individualFoodItem.id === newContentItem.id) // found them
      {
        console.log("Trying method 2");
        FoodItem[index] = newContentItem;
        // return;
      }
    });

    return of(FoodItem);
  }
  

  deleteContentItem(id: number): Observable<Content> {

    for (var i = 0; i < FoodItem.length; i++) // iterate through each chess champion
    {
      if (FoodItem[i].id === id) { // found the item
        // delete it from the array first
        FoodItem.splice(i, 1);
        console.log("Deleted the item: ", FoodItem);
        return of(FoodItem[i]);
      }
    }
    return of(DEFAULTFoodItem); // need to return something if the content isn't there
  }
}
