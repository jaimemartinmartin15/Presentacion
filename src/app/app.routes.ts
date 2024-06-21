import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'mi-trayectoria',
    loadChildren: () => import('./my-trayectory/my-trayectory.routes').then((m) => m.MY_TRAYECTORY_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
