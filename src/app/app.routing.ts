import { Routes, RouterModule } from '@angular/router';
import { ApiSearchComponent } from './pages/api-search/api-search.component';

const routes: Routes = [
  { path: ':user', component: ApiSearchComponent },
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
