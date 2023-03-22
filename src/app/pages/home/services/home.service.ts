import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AboutData } from '@pages/home/models/about.model';
import { ContactData } from '@pages/home/models/contact.model';
import { ExperienceData } from '@pages/home/models/experience.model';
import { HeroData } from '@pages/home/models/hero.model';
import { Project } from '@pages/home/models/project.model';
import { GithubRepo } from '@pages/home/models/repo.model';
import {
  catchError,
  EMPTY,
  forkJoin,
  map,
  Observable,
  shareReplay,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private readonly http = inject(HttpClient);

  private readonly staticData$ = this.http
    .get<{
      projects: Project[];
      hero: HeroData;
      about: AboutData;
      experience: ExperienceData;
      contact: ContactData;
    }>('/data.json')
    .pipe(
      shareReplay(),
      catchError(() => EMPTY)
    );

  private readonly githubRepos$ = this.http
    .get<GithubRepo[]>('https://api.github.com/users/abelfubu/repos')
    .pipe(shareReplay());

  getData(): Observable<{
    projects: Project[];
    hero: HeroData;
    about: AboutData;
    experience: ExperienceData;
    contact: ContactData;
  }> {
    return forkJoin([this.staticData$, this.githubRepos$]).pipe(
      map(([data, repos]) => ({ ...data, repos })),
      catchError((e) => {
        console.log(e);
        return EMPTY;
      })
    );
  }
}
