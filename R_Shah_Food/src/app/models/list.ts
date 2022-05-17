import {Content} from "./content"
export class List {
    // static listCount = 0;
    private _items: Content[];


    constructor() { //item: Content
      this._items = []; // initialize array
      //this._items[0] = item; // set the value of the item at the first index of the array
      // this.increaseCount();
    }
    get items():Content[] {
      return this._items;
    }
  
   

    // contentList: Array<any> = [];
    addcontent(Content:any){
        this._items.push(Content);
      }

      getArrayLength()
      {
        return this._items.length;
      }

      displayData(id:number){
        this._items.length;
        return`
        <div class="card" style="width: 18rem;">
        <img src="${this._items[id].imageLink}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-title">${this._items[id].title}</h2>
        <h5>${this._items[id].author}</h5>
        <h5>${this._items[id].type}</h5>
        <h5>${this._items[id].hashtags}</h5>
        <p class="card-text">${this._items[id].body}</p>
        </div>
        </div>
        `
      }
}
