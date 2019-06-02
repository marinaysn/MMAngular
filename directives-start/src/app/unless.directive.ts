import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input()  set appUnless(condition: boolean) {
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
//templateRef specify what we should render 
//and vcRef is where we render it.
  constructor(private templateRef: TemplateRef<any>, 
    private vcRef: ViewContainerRef) { }

}
