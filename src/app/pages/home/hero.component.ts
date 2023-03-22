import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeroData } from '@pages/home/models/hero.model';
import { ButtonComponent } from 'src/app/shared/button.component';

@Component({
  selector: 'pr-hero',
  standalone: true,
  imports: [ButtonComponent, UpperCasePipe],
  template: `
    <section class="hero">
      <h1>{{ data.title }}</h1>
      <h2>{{ data.subtitle }}</h2>
      <p>{{ data.text }} {{ data.currentWork }}.</p>
      <pr-button
        href="mailto:abelfubu@gmail.com"
        [text]="data.cta | uppercase"
      ></pr-button>
    </section>
  `,
  styles: [
    `
      @use 'mixins';
      .hero {
        @include mixins.flex(center, flex-start);
        flex-direction: column;
        padding: 4rem 0;
        p {
          max-width: 500px;
          padding: 2rem 0;
        }
      }
    `,
  ],
})
export class HeroComponent {
  @Input()
  data!: HeroData;
}
