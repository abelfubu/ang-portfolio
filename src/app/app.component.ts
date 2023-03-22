import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pr-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.dark-mode') isDarkMode = true;
}
