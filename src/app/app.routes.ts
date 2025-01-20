import { Routes } from '@angular/router';
import { InicialComponent } from './Components/inicial/inicial.component';

export const routes: Routes = [
    { path: '', redirectTo: "/inicial", pathMatch: 'full' },
    { path: "inicial", component: InicialComponent },

    // other pages

    { path: '**', redirectTo: '/inicial', pathMatch: 'full' },
];
