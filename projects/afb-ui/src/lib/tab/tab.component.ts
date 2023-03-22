import { NgIf } from '@angular/common';
import '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'afb-tab',
  standalone: true,
  imports: [NgIf],
  template: `
    <section *ngIf="selected">
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      @use 'mixins';

      :host::ng-deep li::marker {
        color: var(--primary);
        /* content: '\f0da'' '; */
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
      }

      section {
        padding: 0.5rem 1rem;

        @include mixins.breakpoint-down(medium) {
          padding: 1rem 0;
        }
      }
    `,
  ],
})
export class TabComponent {
  @Input() title!: string;
  @Input() selected = false;
}
