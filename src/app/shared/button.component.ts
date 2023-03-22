import { NgIf } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'outline';

@Component({
  selector: 'pr-button',
  standalone: true,
  imports: [NgIf],
  template: `
    <a [href]="href" *ngIf="href">
      <button>{{ text }}</button>
    </a>
    <button *ngIf="!href">{{ text }}</button>
  `,
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';
  @Input() href!: string;
  @Input() text = '';
  @HostBinding('class') get className(): ButtonType {
    return this.type;
  }
}
