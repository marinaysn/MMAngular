import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appBindHost]'
})

export class BindHostDirective {

    @HostBinding('style.backgroundColor') backgroundProperty: string = '#004C8B';
    constructor(){
    }

    @HostListener('mouseenter') mouseOver(){
        this.backgroundProperty = '#765666';
    }

    @HostListener('mouseleave') mouseLeave(){
        this.backgroundProperty = '#FFD9EB';
    }

}