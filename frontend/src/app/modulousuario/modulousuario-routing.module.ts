import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatesComponent } from '../components/usuario/updates/updates.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'updates',
    pathMatch: 'full'
  },
  {
    path: 'updates',
    component: UpdatesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulousuarioRoutingModule { }
