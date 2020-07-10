import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CreaUsuarioComponent } from './crea-usuario/crea-usuario.component';

const routes: Routes = [
	{path: '', component: ListaUsuariosComponent},
	{path: 'crear', component: CreaUsuarioComponent},
	{path: 'editar/:id', component: EditarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
