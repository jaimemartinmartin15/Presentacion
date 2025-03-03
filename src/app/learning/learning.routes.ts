import { Routes } from '@angular/router';

import { LearningComponent } from './learning.component';

export const LEARNING_ROUTES: Routes = [
  {
    path: '',
    component: LearningComponent,
    title: 'Aprender',
    data: {
      metaTags: {
        description: 'Aprende lo que necesita saber un ingeniero informático.',
        keywords: ['estudiar', 'ingeniería informática'],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
