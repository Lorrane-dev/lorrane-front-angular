import { Routes } from '@angular/router';
import { SiteInstitucionalComponent } from './pages/site-institucional/site-institucional';

export const routes: Routes = [
  { path: '', component: SiteInstitucionalComponent },
  { path: '**', redirectTo: '' },
];
