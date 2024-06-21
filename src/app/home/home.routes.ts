import { Routes } from '@angular/router';
import { calculateCurrentAge } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Presentación',
    data: {
      metaTags: {
        description: `Me llamo Jaime, tengo ${calculateCurrentAge(new Date(1996, 10, 15))} años y soy ingeniero informático.`,
        keywords: ['jaime martin martin', 'ingeniero informático'],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
