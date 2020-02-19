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
    component: MainadminComponent,
    loadChildren: () => import('./moduloadmin/moduloadmin.module').then(m => m.ModuloadminModule)
  },

  { path: '**', redirectTo:''}


  /*  {
      path: 'admin',
      component: MainadminComponent,
      children: [
        { path: '', redirectTo: 'updates', pathMatch: 'full' },
        { path: 'updates',component:AdminupdatesComponent },
        { path: 'armas',component:AdminarmasComponent },
        { path: 'mapas',component:AdminmapasComponent },
        { path: '**', redirectTo: 'updates', pathMatch: 'full' }
      ]
  
    }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
