import { 
    Directive, 
    ElementRef, 
    Renderer2, 
    HostListener
} from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'

})

export class BetterHighlightDirective {

    constructor(private elRef: ElementRef, private ren: Renderer2) {}

//mouseenter or mouseleave are DOM elements
    @HostListener('mouseenter') mouseOver(eventData: Event){
        this.ren.setStyle(this.elRef.nativeElement, 'background-color', '#CCDEF2'); 
    }

    @HostListener('mouseleave') mouseLeave(){
        this.ren.setStyle(this.elRef.nativeElement, 'background-color', '#D9FFED'); 
    }

}