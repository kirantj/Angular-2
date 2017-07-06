import { Directive, ElementRef, Input } from '@angular/core';

@Directive ({
    selector: '[myHighlight]'
    })


//Directive provides the functionality of the @Directive decorator.
//ElementRef injects into the directive's constructor so the code can access the DOM element.
//Input allows data to flow from the binding expression into the directive.


export class HighlightDirective {

    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = '#a0a0a0';
       el.nativeElement.style.border = '1px solid #171313';
       el.nativeElement.style.padding = '8px';
       el.nativeElement.style.color = '#fff';
    }


}
