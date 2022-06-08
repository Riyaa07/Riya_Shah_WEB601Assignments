import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLightImportantData]'
})
export class HighLightImportantDataDirective {

  @Input() colour?: string;
  @Input() backcolour?: string;
  @Input() bb?: string;
  
 

  private isHighlighted: boolean = false;
  private bgcolor: boolean = false;
  private textColor:boolean=false;

   private initialColour: string | undefined;
   private oriColour: string | undefined;

   
   
  // private initialTextColor: string;


  // Border
  @HostBinding('style.border')
  get border() {
    return this.isHighlighted ? this.bb  :
      this.initialColour;
  }
  
  @HostListener('mouseover') over() {
    this.isHighlighted = !this.isHighlighted;
    this.textColor = !this.textColor;
    this.bgcolor = this.bgcolor
  }

  @HostListener('mouseout') out() {
    this.isHighlighted = !this.isHighlighted;
    this.textColor = !this.textColor;
    this.bgcolor = this.bgcolor
  }
 
  //Background
  @HostBinding('style.backgroundColor')
  get backgroundColour() {
    return this.bgcolor ? this.backcolour  :
      this.oriColour;
  }

  @HostListener('click') onClick() {
    this.bgcolor = !this.bgcolor;
  }
  
  //Text

  @HostBinding('style.Color')
  get Color() {
    return this.textColor? this.colour  :
      this.initialColour;
    
  }

  // @HostListener('over') mouseover() {
  //   this.textColor = !this.textColor;
  // }

  // @HostListener('out') mouseout() {
  //   this.textColor = !this.textColor;
  // }
  
  
  constructor(private elm: ElementRef) { 
    this.initialColour = this.elm.nativeElement.style.backgroundColor;
  }

}
