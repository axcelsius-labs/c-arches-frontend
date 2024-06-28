import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
    { path: '**', redirectTo: '' } // Redirect to home for any unknown paths
];