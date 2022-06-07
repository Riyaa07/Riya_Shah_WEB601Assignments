import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLightImportantData]'
})
export class HighLightImportantDataDirective {

  @Input() colour?: string;
;
  private isHighlighted: boolean = false;
  private bgcolor: boolean = false;
   private initialColour: string | undefined;
   
  // private initialTextColor: string;

  @HostBinding('style.border')
  get border() {
    return this.isHighlighted ? this.colour || " 2px solid red" :
      this.initialColour;
  }
  
  @HostListener('mouseover') over() {
    this.isHighlighted = !this.isHighlighted;
  }

  @HostListener('mouseout') out() {
    this.isHighlighted = !this.isHighlighted;
  }
 
  @HostBinding('style.backgroundColor')
  get backgroundColour() {
    return this.bgcolor ? this.colour || "floralwhite" :
      this.initialColour;
  }

  @HostListener('click') onClick() {
    this.bgcolor = !this.bgcolor;
  }
  
  constructor() { }

}
