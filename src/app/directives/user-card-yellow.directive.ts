import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[rangYellow]',
  standalone: true,
})

export class UserCardYellowDirective {

  @HostBinding('style.background-color') vak: string = ''

  @HostListener('mouseenter')
  vakar() {
    this.vak = 'yellow'
  }

  @HostListener('mouseleave')
  vikvakar() {
    this.vak = '#4b565e'
  }

}
