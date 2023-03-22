import { NgForOf, NgIf } from '@angular/common';
import '@angular/compiler';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'afb-tab-group',
  standalone: true,
  imports: [NgIf, NgForOf],
  template: `
    <nav *ngIf="tabs">
      <ul>
        <li
          *ngFor="let tab of tabs"
          [class.selected]="tab.selected"
          (click)="selectTab(tab)"
        >
          {{ tab.title }}
        </li>
      </ul>
    </nav>
    <ng-content></ng-content>
  `,
  styles: [
    `
      @use 'mixins';

      :host {
        display: flex;
        padding: 1rem 0;
        @include mixins.breakpoint-down(medium) {
          display: block;
        }
      }

      ul {
        overflow-x: auto;
        @include mixins.breakpoint-down(medium) {
          display: flex;
        }
      }

      li {
        border-left: 0.2rem solid var(--primary-alpha);
        cursor: pointer;
        flex-basis: 9rem;
        font-weight: 300;
        line-height: 1rem;
        list-style: none;
        padding: 0.8rem 1.5rem;
        transition: background-color 0.2s ease-in-out;

        @include mixins.breakpoint-down(medium) {
          border-bottom: 0.2rem solid var(--primary-alpha);
          border-left: unset;
        }

        &.selected {
          border-color: var(--primary);
          color: var(--primary);
        }

        &:hover {
          background-color: var(--primary-alpha);
        }
      }
    `,
  ],
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChildren('hover') hoverEls!: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find((tab) => tab.selected);

    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach((element) => (element.selected = false));
    tab.selected = true;
  }
}
