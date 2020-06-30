import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  reportes: any[] = [];
  display = false;
  tipoDialog: number;
  planesEstrategicos: any[] = [];
  planEstrategico: string;
  planesAnuales1: any[] = [];
  planAnual: string;
  fecha: Date;
  fecha2: Date;

  constructor() { }

  ngOnInit(): void {
    this.reportes = [{reporte: 'Plan Estratégico'}, {reporte: 'Plan de Trabajo Anual'}, {reporte: 'Reporte de KPI'},
                     {reporte: 'Reporte de KPI Trimestral'}, {reporte: 'Informe Mensual de Seguimiento'}, {reporte: 'Informe Anual de Seguimiento'},
                     {reporte: 'Reporte de KPI Anual'}];
    this.planesEstrategicos = [
      {label: '2010-2014', value: {id: 1, name: '2010-2014'}},
      {label: '2015-2019', value: {id: 2, name: '2015-2019'}},
      {label: '2020-2024', value: {id: 3, name: '2020-2024'}}
    ];
    this.planesAnuales1 = [
      {label: '2010', value: {id: 1, name: '2010'}},
      {label: '2011', value: {id: 2, name: '2011'}},
      {label: '2012', value: {id: 3, name: '2012'}},
      {label: '2013', value: {id: 3, name: '2013'}},
      {label: '2014', value: {id: 3, name: '2014'}}
    ];
    this.planAnual = this.planesAnuales1[0];
  }

  showDialog(tipoRepo) {
    this.planEstrategico = this.planesEstrategicos[0];
    this.planesAnuales1 = [
      {label: '2010', value: {id: 1, name: '2010'}},
      {label: '2011', value: {id: 2, name: '2011'}},
      {label: '2012', value: {id: 3, name: '2012'}},
      {label: '2013', value: {id: 3, name: '2013'}},
      {label: '2014', value: {id: 3, name: '2014'}}
    ];
    this.fecha = null;
    this.fecha2 = null;
    if (tipoRepo === 'Plan Estratégico'){
      this.tipoDialog = 1;
    }
    else if (tipoRepo === 'Reporte de KPI' || tipoRepo === 'Plan de Trabajo Anual' || tipoRepo === 'Reporte de KPI Anual' || tipoRepo === 'Informe Anual de Seguimiento'  ) {
      this.tipoDialog = 2;
    }
    else if (tipoRepo === 'Informe Mensual de Seguimiento' || tipoRepo === 'Reporte de KPI Trimestral' ) {
      this.tipoDialog = 3;
    }
    this.display = true;
  }

  closeDialog(){
    this.display = false;
  }
  cambioPlanAnual(plan){
    if (plan.id === 1){
      this.planesAnuales1 = [
        {label: '2010', value: {id: 1, name: '2010'}},
        {label: '2011', value: {id: 2, name: '2011'}},
        {label: '2012', value: {id: 3, name: '2012'}},
        {label: '2013', value: {id: 3, name: '2013'}},
        {label: '2014', value: {id: 3, name: '2014'}}
      ];
    }
    else if (plan.id === 2){
      this.planesAnuales1 = [
        {label: '2015', value: {id: 1, name: '2015'}},
        {label: '2016', value: {id: 2, name: '2016'}},
        {label: '2017', value: {id: 3, name: '2017'}},
        {label: '2018', value: {id: 3, name: '2018'}},
        {label: '2019', value: {id: 3, name: '2019'}}
      ];
    }
   else if (plan.id === 3){
      this.planesAnuales1 = [
        {label: '2020', value: {id: 1, name: '2020'}},
        {label: '2021', value: {id: 2, name: '2021'}},
        {label: '2022', value: {id: 3, name: '2022'}},
        {label: '2023', value: {id: 3, name: '2023'}},
        {label: '2024', value: {id: 3, name: '2024'}}
      ];
    }
  }

}
