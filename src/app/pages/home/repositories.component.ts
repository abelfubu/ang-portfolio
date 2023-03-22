import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GithubRepo } from '@pages/home/models/repo.model';
import { CardComponent } from 'afb-ui';

@Component({
  selector: 'pr-repositories',
  standalone: true,
  imports: [NgForOf, CardComponent],
  template: `<h4>Github Repositories</h4>
    <div class="grid">
      <a
        class="card-link"
        target="_blank"
        [href]="repo.html_url"
        [attr.aria-label]="repo.name"
        rel="noreferrer"
        *ngFor="let repo of repos; let index = index"
      >
        <afb-card [bgImage]="'https://picsum.photos/300/200?' + letters[index]">
          <div class="card-header">
            <i class="fa fa-folder"></i>
            <a
              [href]="repo.html_url"
              target="_blank"
              [title]="repo.name"
              [attr.aria-label]="repo.name"
              rel="noreferrer"
            >
              <i class="fab fa-github-square"></i>
            </a>
          </div>

          <p>{{ repo.name }}</p>
          <!-- <span class="description">{{ repo.description | substring }}</span> -->
          <span class="language">{{ repo.language }}</span>
        </afb-card>
      </a>
    </div>`,
  styles: [
    `
      @use 'mixins';

      :host {
        display: block;
        padding: 4rem 0;
      }

      .grid {
        @include mixins.auto-grid(15rem, 0.5rem);
        display: grid;
        padding: 2rem 0;
      }

      md-card {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .card-header {
        align-items: center;
        display: flex;
        justify-content: space-between;

        a,
        .fa-folder {
          color: var(--primary-alpha);
          font-size: 1.5rem;
        }

        a:hover {
          color: var(--primary);
        }
      }

      p {
        font-weight: 700;
      }

      .card-link {
        color: inherit;
        text-decoration: none;
      }

      .description {
        align-items: bottom;
        display: flex;
        flex: 1;
        font-size: 0.8rem;
        font-weight: 300;
        line-height: 1rem;
        padding: 0.5rem 0;
      }

      .language {
        font-size: 0.75rem;
        font-weight: 700;
        opacity: 0.8;
        padding-top: 0.5rem;
      }
    `,
  ],
})
export class RepositoriesComponent {
  @Input()
  repos: GithubRepo[] = [];

  letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
}
