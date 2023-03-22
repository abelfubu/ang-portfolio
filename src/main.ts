import { provideFileRouter } from '@analogjs/router';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { AppComponent } from './app/app.component';
import { mainProviders } from './main.providers';

bootstrapApplication(AppComponent, {
  providers: [provideFileRouter(), ...mainProviders],
});
