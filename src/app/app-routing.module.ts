import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'ejemplo', component: EjemploComponent},
      /*{path: 'setup', loadChildren: () => import('./components/setup/setup.module').then(m => m.SetupModule)},
      {path: 'theming', loadChildren: () => import('./components/theming/theming.module').then(m => m.ThemingModule)},
      {path: 'icons', loadChildren: () => import('./components/icons/icons.module').then(m => m.IconsModule)},*/

    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
