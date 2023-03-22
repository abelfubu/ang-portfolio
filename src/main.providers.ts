/**
 * Common providers shared with client and server-side.
 */

import { provideHttpClient } from '@angular/common/http';

export const mainProviders = [provideHttpClient()];
