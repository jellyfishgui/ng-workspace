import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'orders',
        loadComponent: () =>
          import('@ng-workspace/orders').then((m) => m.OrdersComponent),
      },
      {
        path: 'user-center',
        loadChildren: () =>
          import('../user-center/user-center.module').then(
            (m) => m.UserCenterModule
          ),
      },
    ],
  },
];
