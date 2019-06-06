import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive( {
    selector: '[appDropdownDirective]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;
    
    // @HostListener('click') onOpenDir() {
    //     this.isOpen = !this.isOpen;
    // }

    //another approach

    constructor(private elRef: ElementRef){}

    @HostListener('document:click', ['$event']) onOpenDir(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    
}