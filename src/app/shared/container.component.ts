import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'pr-container',
  standalone: true,
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      @use 'mixins';

      :host {
        display: block;
        margin: auto;
        padding: 2rem 4rem;

        @include mixins.breakpoint-down(medium) {
          padding: 2rem;
        }

        @include mixins.breakpoint-down(small) {
          padding: 1rem;
        }
      }
    `,
  ],
})
export class ContainerComponent {
  @Input() maxWidth = 1100;
  @HostBinding('style.max-width') width = this.maxWidth + 'px';
}
