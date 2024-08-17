import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'main-data',
    loadChildren: () => import('main-data/Module').then(m => m.RemoteEntryModule)
  },
];
