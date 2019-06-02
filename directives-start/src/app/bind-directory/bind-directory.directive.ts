import { Directive, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appBindBindDirectory]'
})

export class BindDirectory implements OnInit{

    @Input() defaultColor: string = '#BCB0F9';
    @Input() highlightColor: string = '#6B63A5';

    @HostBinding('style.backgroundColor') backgroundProperty: string;
    constructor(){
    }

    ngOnInit(): void {

        this.backgroundProperty = this.defaultColor;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    @HostListener('mouseenter') mouseOver(){
        this.backgroundProperty = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeave(){
        this.backgroundProperty = this.defaultColor;
    }
}