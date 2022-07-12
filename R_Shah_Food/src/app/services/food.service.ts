import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../models/content';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };
  FoodItem: any;

  
  constructor(private http: HttpClient) { }

  //return
  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/fooo");
  }


  addContentItem(newContent: Content): Observable<Content> {
    return this.http.post<Content>("/api/fooo", newContent, this.httpOptions)
  }

  getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/fooo/" + id);
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put<any>("api/fooo", contentItem, this.httpOptions);
  }
  

 // D
 deleteContentItem(newContent: Content): Observable<undefined> {
  // display that it's processing
  // delete the item
  return of(); // send back observable so the component can subscribe to it and know it worked
}

}
  

 