import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { ContainerComponent } from 'src/app/shared/container.component';

@Component({
  selector: 'pr-header',
  standalone: true,
  imports: [NgIf, AsyncPipe, ContainerComponent],
  template: `
    <pr-container *ngIf="isMatched$ | async as isSmall">
      LOGO
      <nav
        [class.mobile]="isSmall.matches"
        [class.hidden]="isSmall.matches && hidden"
        (click)="toggleHidden()"
      >
        <ul>
          <ng-content></ng-content>
        </ul>
      </nav>
      <i
        class="fas fa-bars"
        *ngIf="isSmall.matches"
        (click)="toggleHidden()"
      ></i>
    </pr-container>
  `,
  styles: [
    `
      @use 'mixins';
      @use 'fonts';

      :host {
        background-color: var(--dark);
        box-shadow: 0 1px 6px 1px #23232350;
        font-family: fonts.$title;
        height: 4.5rem;
      }

      md-container {
        @include mixins.flex;
      }

      nav.mobile {
        background-color: var(--dark);
        display: grid;
        font-size: 3rem;
        inset: 0;
        justify-content: center;
        opacity: 1;
        padding-top: 40vh;
        position: fixed;
        transform: translateX(0);
        transition: transform 0.5s ease, opacity 0.5s ease;
        z-index: 1;

        ul {
          flex-direction: column;
        }

        &::ng-deep li,
        &::ng-deep span {
          padding: 2rem 0;
        }

        &::before {
          content: '\f00d';
          cursor: pointer;
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          inset: 6.25rem 0 0 0;
          margin: auto;
          position: absolute;
          width: 1rem;
        }
      }

      ul {
        align-items: center;
        counter-reset: css-counter 0;
        display: flex;
        list-style: none;
      }

      ul::ng-deep li {
        counter-increment: css-counter 1;
        cursor: pointer;
        margin-left: 0.5rem;
        padding: 0.5rem 1rem;

        &::before {
          color: var(--primary);
          content: '0' counter(css-counter) '.';
        }
      }

      nav.mobile.hidden {
        opacity: 0;
        transform: translateX(100%);
      }

      .fa-bars {
        cursor: pointer;
      }
    `,
  ],
})
export class HeaderComponent {
  @ContentChildren('hover') lis!: QueryList<ElementRef>;

  isMatched$ = this.observer.observe(Breakpoints.XSmall);
  hidden = true;

  constructor(private readonly observer: BreakpointObserver) {}

  toggleHidden(): void {
    this.hidden = !this.hidden;
  }
}
