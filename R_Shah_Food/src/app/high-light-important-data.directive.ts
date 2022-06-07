import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLightImportantData]'
})
export class HighLightImportantDataDirective {

  @Input() colour?: string;
  @Input() txcolour?: string;

  private isHighlighted: boolean = false;
  private bgcolor: boolean = false;
   private initialColour: string | undefined;
   private txColour:string | undefined;
   
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
    return this.bgcolor ? this.colour  :
      this.initialColour;
  }

  @HostListener('click') onClick() {
    this.bgcolor = !this.bgcolor;
  }
  
  @HostBinding('style.color')
  get textColour() {
    return this.txColour ? this.checkLuminance(this.colour || "green") :
      this.checkLuminance;
  }

  checkLuminance(color: string): string {
    // run luminance check on the color to return either black or white for the text color for maximum contrast
    return this.txColour ? "white" : "black";
  }
  constructor() { }

}
