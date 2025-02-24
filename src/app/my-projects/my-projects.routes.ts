import { Routes } from '@angular/router';

import { MyProjectsComponent } from './my-projects.component';

export const MY_PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: MyProjectsComponent,
    title: 'Mis proyectos',
    data: {
      metaTags: {
        description: 'Estos son proyectos personales o aplicaciones que creo en mi tiempo libre como parte del entrenamiento.',
        keywords: ['proyectos', 'ingeniería informática', 'jaime martin martin'],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
