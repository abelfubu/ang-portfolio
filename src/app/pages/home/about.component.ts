import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AboutData } from '@pages/home/models/about.model';

@Component({
  selector: 'pr-about',
  standalone: true,
  imports: [NgOptimizedImage, NgFor],
  template: ` <div class="col">
      <h4>{{ data.title }}</h4>
      <p *ngFor="let text of data.text">{{ text }}</p>

      <p>{{ data.techs.title }}</p>

      <div class="lists">
        <ul>
          <li *ngFor="let tech of data.techs.list.slice(0, 3)">{{ tech }}</li>
        </ul>

        <ul>
          <li *ngFor="let tech of data.techs.list.slice(3, 6)">{{ tech }}</li>
        </ul>
      </div>
    </div>
    <div class="col img" data-scroll data-scroll-speed="2">
      <img
        ngSrc="assets/images/profile.png"
        [height]="400"
        [width]="400"
        alt="Profile picture"
      />
    </div>`,
  styles: [
    `
      @use 'mixins';

      :host {
        align-items: center;
        display: grid;
        gap: 3rem;
        grid-template-columns: 2fr 1fr;
        padding: 4rem 0;

        @media (max-width: 800px) {
          grid-template-columns: 1fr;

          .img {
            margin: auto;
            max-width: 500px;
          }
        }

        .img {
          background: linear-gradient(var(--accent), var(--primary));
          border-radius: var(--radius-lg);
          display: flex;
          overflow: hidden;
        }
      }

      img {
        aspect-ratio: 12 / 16;
        height: 100%;
        margin-top: auto;
        mix-blend-mode: multiply;
        object-fit: cover;
        object-position: center;
        width: 100%;
      }

      p {
        padding: 1rem 0;
      }

      .lists {
        @include mixins.flex(flex-start);
        gap: 4rem;
        padding-left: 1rem;
      }

      li::marker {
        color: var(--primary);
        content: '\f0da'' ';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
      }
    `,
  ],
})
export class AboutComponent {
  @Input() data!: AboutData;
}
