import { Routes } from '@angular/router';
import { InicialComponent } from './Components/inicial/inicial.component';
import { SorteioComponent } from './Components/sorteio/sorteio.component';

export const routes: Routes = [
    { path: '', redirectTo: "/inicial", pathMatch: 'full' },
    { path: "inicial", component: InicialComponent },
    { path: "sorteio", component: SorteioComponent },

    // other pages

    { path: '**', redirectTo: '/inicial', pathMatch: 'full' },
];
