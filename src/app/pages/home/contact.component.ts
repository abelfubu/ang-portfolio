import { NgForOf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactData } from '@pages/home/models/contact.model';
import { ButtonComponent } from '@shared/button.component';

@Component({
  selector: 'pr-contact',
  standalone: true,
  imports: [ButtonComponent, NgForOf, UpperCasePipe],
  template: `
    <h4>{{ data.title }}</h4>
    <p *ngFor="let text of data.text">{{ text }}</p>
    <pr-button
      href="mailto:abelfubu@gmail.com"
      [text]="data.cta | uppercase"
    ></pr-button>
    <p class="foot">{{ data.footer }}</p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 4rem 0 0;
        text-align: center;
      }
      p {
        padding: 1rem 0;
      }
      .foot {
        font-size: 0.8rem;
        font-weight: 300;
        margin-top: 4rem;
        opacity: 0.7;
      }
    `,
  ],
})
export class ContactComponent {
  @Input() data!: ContactData;
}
