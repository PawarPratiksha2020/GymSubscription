import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone : true
})
export class Highlight {

  constructor(el:ElementRef) {
    el.nativeElement.style.background = 'orange';
    el.nativeElement.style.padding = '4px';
   }

}
