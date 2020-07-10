import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormUsuarioModule } from '../../../components/seguridad/usuarios/form-usuario/form-usuario.module';
import { FormUsuarioComponent } from '../../../components/seguridad/usuarios/form-usuario/form-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CreaUsuarioComponent } from './crea-usuario/crea-usuario.component';
import {CardUsuarioModule} from '../../../components/seguridad/usuarios/card-usuario/card-usuario.module';
import {CardUsuarioComponent} from '../../../components/seguridad/usuarios/card-usuario/card-usuario.component';

@NgModule({
	declarations: [
		ListaUsuariosComponent,
		EditarUsuarioComponent,
		CreaUsuarioComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		UsuariosRoutingModule,
		FormUsuarioModule,
		CardModule,
		DialogModule,
		DropdownModule,
		InputSwitchModule,
    CardUsuarioModule
	],
	entryComponents: [
		FormUsuarioComponent,
    CardUsuarioComponent
	],
})
export class UsuariosModule { }
