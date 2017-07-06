import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive ({
    selector : '[mouseEvent]'
})

export class mouseEvent {

    constructor(private el: ElementRef){
       this.el.nativeElement.style.backgroundColor = '#a0a0a0';
       this.el.nativeElement.style.border = '1px solid #171313';
       this.el.nativeElement.style.padding = '8px';
       this.el.nativeElement.style.color = '#fff';
    }

      @HostListener('mouseenter') onMouseEnter() {
       //@HostListener('mousedown') onMouseDown() {
        //this.highlight('yellow');
          this.el.nativeElement.style.backgroundColor = '#0c6b61';
      }
      @HostListener('mouseleave') onMouseLeave() {
        //@HostListener('mouseup') onMouseUp() {
         //this.highlight(null);
           this.el.nativeElement.style.backgroundColor = '#a0a0a0';
      }

//  private highlight(color: string) {
//      this.el.nativeElement.style.backgroundColor = color;
//  }

}
