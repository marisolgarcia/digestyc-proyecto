import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng/api';
import {MenuItem} from 'primeng/api';

interface estados {
  name: string;
  code: string;
}

interface planAnual {
  codigo: number;
  anio: number;
  estado: string;
  tIniciativas:number;
  tActividades:number;
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
  planesAnuales: planAnual[];

  estado: estados[];
  selectedEstado: string = 'Vigente';
  nombre: string;

  val: string = "2020";

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {

    this.estado = [
      {
        name: 'Vigente',
        code: '1'
      },
      {
        name: 'A programar',
        code: '2'
      },
      {
        name: 'No Vigente',
        code: '3'
      }
    ];

    this.planesAnuales = [
      {
        codigo: 1,
        anio: 2020,
        estado: 'Vigente',
        tIniciativas: 15,
        tActividades: 48
      },
      {
        codigo: 2,
        anio: 2021,
        estado: 'A programar',
        tIniciativas: 15,
        tActividades: 48
      },
      {
        codigo: 3,
        anio: 2022,
        estado: 'A programar',
        tIniciativas: 15,
        tActividades: 48
      },
      {
        codigo: 4,
        anio: 2023,
        estado: 'A programar',
        tIniciativas: 15,
        tActividades: 48
      },
      {
        codigo: 5,
        anio: 2024,
        estado: 'A programar',
        tIniciativas: 15,
        tActividades: 48
      },
      {
        codigo: 6,
        anio: 2019,
        estado: 'No Vigente',
        tIniciativas: 15,
        tActividades: 48
      },
      {
        codigo: 7,
        anio: 2018,
        estado: 'No Vigente',
        tIniciativas: 15,
        tActividades: 48
      },
      {
        codigo: 8,
        anio: 2017,
        estado: 'No Vigente',
        tIniciativas: 15,
        tActividades: 48
      },
      {
        codigo: 9,
        anio: 2016,
        estado: 'No Vigente',
        tIniciativas: 15,
        tActividades: 48
      }
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
