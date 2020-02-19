import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/admin/login/login.component';
import { ControlComponent } from '../components/admin/control/control.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'control',
    component: ControlComponent,
    loadChildren: () => import('./control/control.module').then(m => m.ControlModule)
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloadminRoutingModule { }
