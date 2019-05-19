import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native

})
export class ServerElementComponent implements OnInit, OnChanges, 
DoCheck, AfterContentInit, AfterContentChecked,
OnDestroy, AfterViewInit, AfterViewChecked {

  @ViewChild('heading') Heading: ElementRef;
  @ContentChild('contentParagraph') ContentParagraph: ElementRef;

  ngAfterViewChecked(): void {
    console.log('777 ngAfterViewChecked called');
    //throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {

    console.log('888 ngAfterViewInit called');

    console.log('222 Text Content: ' + this.Heading.nativeElement.textContent);
  

  //  throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {

    console.log('999 ngOnDestroy called');
   // throw new Error("Method not implemented.");
  }
  ngAfterContentChecked(): void {

    console.log('666 ngAfterContentChecked called');
    //throw new Error("Method not implemented.");
  }
  ngAfterContentInit(): void {

    console.log('555 ngAfterContentInit called');
    console.log('Reg2. Content: ' + this.ContentParagraph.nativeElement.textContent);
  
    //throw new Error("Method not implemented.");
  }
  

  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log('Constructor called');
   }

   ngOnChanges(changes: SimpleChanges): void {
     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     //Add '${implements OnChanges}' to the class.
     console.log('ngOnChanges called');
     console.log(changes);
   }

  ngOnInit() {

    console.log('ngOnInit called');
    console.log('Text Content: ' + this.Heading.nativeElement.textContent);
    console.log('Reg. Content: ' + this.ContentParagraph.nativeElement.textContent);
  
  }

  ngDoCheck(): void {

    console.log('ngDoCheck called');
   // throw new Error("Method not implemented.");
  }

}
