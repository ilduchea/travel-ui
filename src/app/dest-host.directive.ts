import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDestHost]'
})
export class DestHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
