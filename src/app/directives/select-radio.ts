import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector:'[select-radio]'
})

export class SelectRadio{

   constructor(private el: ElementRef) {
      this.el.nativeElement.style.backgroundColor = '#a0a0a0';
      this.el.nativeElement.style.border = '1px solid #171313';
      this.el.nativeElement.style.padding = '8px';
      this.el.nativeElement.style.color = '#fff';
   }

    @Input('select-radio') highlightColor: string;
    @Input() defaultColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        //this.highlight(this.highlightColor || 'red');
          this.highlight(this.highlightColor || this.defaultColor || '#31708f');
        //this.highlight(this.highlightColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        //this.highlight(null);
          this.el.nativeElement.style.backgroundColor = '#a0a0a0';
    }

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }


}
