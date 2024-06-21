import { Routes } from '@angular/router';

import { MyTrayectoryComponent } from './my-trayectory.component';

export const MY_TRAYECTORY_ROUTES: Routes = [
  {
    path: '',
    component: MyTrayectoryComponent,
    title: 'Trayectoria',
    data: {
      metaTags: {
        description: 'Conoce cual ha sido mi trayectoria profesional hasta el día de hoy y en que proyectos he trabajado.',
        keywords: ['jaime', 'martin', 'curriculum', 'trayectoria', 'ingeniero', 'informatico'],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
