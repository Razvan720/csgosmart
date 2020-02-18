import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainusuarioComponent } from './components/usuario/mainusuario/mainusuario.component';
import { MainadminComponent } from './components/admin/mainadmin/mainadmin.component';

const routes: Routes = [
  {
    path: '',
    component: MainusuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: MainadminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
