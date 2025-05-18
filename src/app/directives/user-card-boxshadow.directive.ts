import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[userboxshadow]',
  standalone: true,
})

export class UserCardBoxshadowDirective {

  @HostBinding('style.box-shadow') shadow: string = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.shadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.shadow = '';
  }

}
