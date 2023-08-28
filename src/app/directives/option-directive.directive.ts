import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ng-option]',
  standalone: true
})
export class OptionDirective {
  constructor(public template: TemplateRef<any>) { }
}
