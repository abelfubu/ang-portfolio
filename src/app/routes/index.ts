import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AboutComponent } from '@pages/home/about.component';
import { ContactComponent } from '@pages/home/contact.component';
import { ExperienceComponent } from '@pages/home/experience.component';
import { HeroComponent } from '@pages/home/hero.component';
import { ProjectsComponent } from '@pages/home/projects.component';
import { RepositoriesComponent } from '@pages/home/repositories.component';
import { HomeService } from '@pages/home/services/home.service';
import { ContainerComponent } from '@shared/container.component';
import { HeaderComponent } from '@shared/header.component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    HeaderComponent,
    ContainerComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    RepositoriesComponent,
    ContactComponent,
  ],
  template: `
  
  <ng-container *ngIf="data$ | async as data">
    <pr-header />
    <pr-container>
      <pr-hero [data]="data.hero" />
      <pr-about [data]="data.about"/>
      <pr-experience [data]="data.experience" />
      <pr-projects [projects]="data.projects"/>
      <pr-repositories [repos]="data.repos"/>
      <pr-contact [data]="data.contact"/>
    </pr-container>
  </ng-container>
  `,
  styles: [],
})
export default class HomeComponent {
  protected readonly data$ = inject(HomeService)
    .getData()
    .pipe(tap(console.log));
}
