import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainusuarioComponent } from './components/usuario/mainusuario/mainusuario.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ControlComponent } from './components/admin/control/control.component';


const routes: Routes = [
  {
    path: '',
    component: MainusuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: LoginComponent
  },
  {
    path: 'control',
    component: ControlComponent,
    loadChildren: () => import('./moduloadmin/control.module').then(m => m.ControlModule)
  },

  { path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
