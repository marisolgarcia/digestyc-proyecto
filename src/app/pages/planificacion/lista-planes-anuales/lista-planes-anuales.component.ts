import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng/api';
import {MenuItem} from 'primeng/api';

interface estados {
  name: string;
  code: string;
}

@Component({
  selector: 'app-lista-planes-anuales',
  templateUrl: './lista-planes-anuales.component.html',
  styleUrls: ['./lista-planes-anuales.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ListaPlanesAnualesComponent implements OnInit {

  crear: boolean;
  filtrar: boolean;
  editar: boolean;

  estado: estados[];
  selectedEstado: string = 'Vigente';
  nombre: string;

  val: string = "2020";

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {

    this.estado = [
      {name: 'Vigente', code: '1'},
      {name: 'A programar', code: '2'},
      {name: 'No Vigente', code: '3'}
    ];

  }

  ngOnInit(): void {
  }

  crearDialog() {
    this.crear = true;
  }

  editarDialog() {
    this.editar = true;
  }

  filtrarDialog() {
    this.filtrar = true;
  }
  showSuccessCrear() {
    this.crear = false;
    this.messageService.add({severity:'success', summary: 'Guardado', detail:'Plan Anual guardado correctamente'});
  }
  showSuccessEditar() {
    this.editar = false;
    this.messageService.add({severity:'success', summary: 'Guardado', detail:'Plan Anual guardado correctamente'});
  }

}
