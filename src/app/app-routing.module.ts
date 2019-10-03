import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiSearchComponent } from './pages/api-search/api-search.component';

const routes: Routes = [ { path: '', component: ApiSearchComponent, data: { modulo: '' } }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
