import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExperienceData } from '@pages/home/models/experience.model';
import { TabComponent, TabGroupComponent } from 'afb-ui';

@Component({
  selector: 'pr-experience',
  standalone: true,
  imports: [TabGroupComponent, TabComponent, NgForOf],
  template: `<h4>{{ data.title }}</h4>
    <afb-tab-group>
      <afb-tab *ngFor="let job of data.jobs" [title]="job.company">
        <h3>{{ job.title }}</h3>
        <h5>{{ job.date }}</h5>
        <ul>
          <li *ngFor="let description of job.description">{{ description }}</li>
        </ul>
      </afb-tab>
    </afb-tab-group>`,

  styles: [
    `
      :host {
        display: block;
        padding: 4rem 0;
      }
      h3 {
        font-weight: 300;
        font-size: 1.8rem;
      }
      h5 {
        font-size: 1rem;
      }
      li {
        padding: 0.5rem 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  @Input() data!: ExperienceData;
}
