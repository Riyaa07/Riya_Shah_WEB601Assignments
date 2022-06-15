import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodItem } from '../data/mock-Food';
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
  getContentItem(id:number): Observable<Content>{
    for (var d = 0, len = FoodItem.length; d < len; d += 1) {
        if (FoodItem[d].id === id) {
            return of(FoodItem[d]);
        }
    }
    //still the return was showing to be missing and wasnt accepting the return in string.
    return of(FoodItem[d]);
}

  //create
  
  //array and return it
  // added [] at end of content as it showed me in error
  addContentItem(newContent: Content): Observable<Content[]> {

    newContent = {
      id:8,
    name: 'Gujarati thali',
    title: 'Rajwadu',
    body: 'Authentic Gujarati Food platter',
    author: 'Riya Shah',
    imageLink: 'https://i.pinimg.com/600x315/a4/f2/db/a4f2dbaa26a6b93ca35d882a3a0ed679.jpg',
    type: 'gujarati',
    hashtags:['authentic']
    }
      
     FoodItem.push(newContent);
    return of (FoodItem);

  }

  

  //updating

  updateContentItem(newContent: Content): Observable<Content[]> {
    
    let newRecordToUpdate = {id:'8', name:'platter'};
       this.FoodItem.map((todo: { id: string; }, i: string | number) => {
         if (todo.id == newRecordToUpdate .id){
            this.FoodItem[i];
          }
        });
        return of (FoodItem);
    
  };
  

  // delete

  // deleteContentItem(newContent: Content): Observable<undefined> {
  //   // display that it's processing
  //   // delete the item
  //   return of(); // send back observable so the component can subscribe to it and know it worked
  // }
}
