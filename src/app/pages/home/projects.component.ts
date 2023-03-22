import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '@pages/home/models/project.model';
import { CardComponent } from 'afb-ui';

@Component({
  selector: 'pr-projects',
  standalone: true,
  imports: [NgForOf, CardComponent],
  template: ` <h4>Some things I've Built</h4>
    <div class="grid" *ngFor="let project of projects">
      <div
        class="project-image"
        [style.backgroundImage]="'url(' + project.img + ')'"
      >
        <a
          [href]="project.link"
          target="_blank"
          [attr.aria-label]="project.title"
          rel="noreferrer"
        ></a>
      </div>
      <div class="project-description">
        <h5>Featured Project</h5>
        <h3>{{ project.title }}</h3>
        <afb-card>
          <p>{{ project.description }}</p>
        </afb-card>
        <div class="techs">
          <p *ngFor="let tech of project.techs">{{ tech }}</p>
        </div>
        <div class="links">
          <a
            [href]="project.githubLink"
            target="_blank"
            #hover
            aria-label="Github"
            rel="noreferrer"
          >
            <i class="fab fa-github-square"></i>
          </a>
          <a
            [href]="project.link"
            target="_blank"
            #hover
            aria-label="See more"
            rel="noreferrer"
          >
            <i class="fas fa-link"></i>
          </a>
        </div>
      </div>
    </div>`,
  styles: [
    `
      @use 'mixins';

      :host {
        display: block;
        padding: 4rem 0;
      }

      h5 {
        color: var(--primary);
        font-size: 0.8rem;
        padding: 0;
      }

      h3 {
        font-size: 1.6rem;
      }

      .grid {
        display: grid;
        grid-auto-rows: 25rem;
        grid-template-columns: 1.2fr 1.2fr;
        padding: 3rem 0;
        @include mixins.breakpoint-down(small) {
          grid-auto-rows: auto;
          grid-template-columns: 100%;
        }

        &:nth-child(even) {
          .project-image {
            margin-left: -2rem;
            margin-right: 0;
            order: 2;
          }

          .project-description {
            margin-left: 0;
            margin-right: -2rem;
            order: 1;
            text-align: start;
          }

          .techs {
            justify-content: flex-start;
          }

          .links a {
            margin-left: 0;
            margin-right: 1rem;
          }
        }
      }

      .project-image {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: var(--radius-sm);
        margin-right: -2rem;
        overflow: hidden;
        position: relative;

        @include mixins.breakpoint-down(small) {
          height: 25rem;
          margin: 0 !important;
          order: 2;
        }

        &::before {
          background-color: var(--primary-alpha);
          content: '';
          inset: 0;
          mix-blend-mode: screen;
          position: absolute;
          transition: background-color 0.52s ease-in-out;
        }

        &:hover::before {
          background-color: transparent;
        }

        a {
          inset: 0;
          position: absolute;
        }
      }

      .project-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: -2rem;
        text-align: end;
        z-index: 2;

        @include mixins.breakpoint-down(small) {
          margin: 0 !important;
          order: 1;
          text-align: start;
        }
      }

      .techs {
        column-gap: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        @include mixins.breakpoint-down(small) {
          justify-content: flex-start;
        }
      }

      md-card {
        margin: 1rem 0;
      }

      .links {
        cursor: pointer;
        font-size: 1.3rem;
        padding: 1rem 0;

        a {
          color: var(--primary-alpha);
          font-size: 1.5rem;
          margin-left: 1rem;

          &:hover {
            color: var(--primary);
          }
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
}
