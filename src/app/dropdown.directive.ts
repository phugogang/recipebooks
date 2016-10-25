import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  @HostListener('click') open(){
    this.isOpen = true;
  }
  @HostListener('mouseleave') leaves(){
    this.isOpen = false;
  }

  constructor() { }
  private isOpen: boolean = false;

}
