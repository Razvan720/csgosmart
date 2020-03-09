import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainusuarioComponent } from './components/usuario/mainusuario/mainusuario.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ControlComponent } from './components/admin/control/control.component';
import { GLoginUserGuard } from './services/glogin-user.guard';


const routes: Routes = [
  {
    path: '',
    component: MainusuarioComponent,
    loadChildren: () => import('./modulousuario/modulousuario.module').then(m => m.ModulousuarioModule)
    
  }, 
  {
    path: 'admin',
    component: LoginComponent
  },
  {
    path: 'control',
    component: ControlComponent,
    loadChildren: () => import('./moduloadmin/control.module').then(m => m.ControlModule),
    canActivate: [GLoginUserGuard]
  },
  {
    path: '**',
    redirectTo: 'updates'
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
