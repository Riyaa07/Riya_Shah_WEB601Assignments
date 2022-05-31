import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'cuisine'
})
export class CuisinePipe implements PipeTransform {

  transform(FoodItem: Content[], defaultvalue?: string): Content[] {
    return  FoodItem.filter(cuisine =>{
      return !cuisine.type?.length 
       || cuisine.type == "Icecream" || cuisine.type =="Mexican" || cuisine.type =="Icecreams"  || cuisine.type =="Icecreams" || cuisine.type =="Indo-Chinese" || cuisine.type =="Sabji"|| cuisine.type =="Chinese";

    })
  }
 

  

}
