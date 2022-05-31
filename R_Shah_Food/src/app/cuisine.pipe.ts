import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'cuisine'
})
export class CuisinePipe implements PipeTransform {

  transform(FoodItem: Content[], defaultvalue?: string): Content[] {
    return  FoodItem.filter(cuisine =>{
      return !cuisine.type?.length 
       || cuisine.type == "Chinese" || cuisine.type =="Desserts" ;

    })
  }
 

  

}
