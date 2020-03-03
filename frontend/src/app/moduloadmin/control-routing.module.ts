import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminupdatesComponent } from 'src/app/components/admin/adminupdates/adminupdates.component';
import { AdminarmasComponent } from 'src/app/components/admin/adminarmas/adminarmas.component';
import { AdminmapasComponent } from 'src/app/components/admin/adminmapas/adminmapas.component';
import { AdmincajasComponent } from 'src/app/components/admin/admincajas/admincajas.component';
import { AdminperfilComponent } from '../components/admin/adminperfil/adminperfil.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'updates',
    pathMatch: 'full'
  },
  {
    path: 'updates',
    component: AdminupdatesComponent,
  },
  {
    path: 'armas',
    component: AdminarmasComponent,
  },
  {
    path: 'mapas',
    component: AdminmapasComponent,
  },
  {
    path: 'cajas',
    component: AdmincajasComponent,
  },
  {
    path: 'perfil',
    component: AdminperfilComponent,
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
export class ControlRoutingModule { }
