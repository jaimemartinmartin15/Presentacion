import { Routes } from '@angular/router';

import { AboutMeComponent } from './about-me.component';

export const ABOUT_ME_ROUTES: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    title: 'Sobre mí',
    data: {
      metaTags: {
        description: 'Conoce a Jaime Martín Martín.',
        keywords: ['ingeniero informatico', 'jaime martin martin'],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
