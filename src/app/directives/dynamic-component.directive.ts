import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicComponentHost]',
})
export class DynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}