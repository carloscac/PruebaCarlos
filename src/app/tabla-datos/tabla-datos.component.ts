import { Component, OnInit } from '@angular/core';
import { ConexionServicioService } from '../conexion-servicio.service';
import { respuesta } from '../models/respuesta.model';
import { resultado } from '../models/resultado.model';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {
  public datosMostrar = [];
  public datos: respuesta;
  constructor(private servicio :ConexionServicioService) {
    
   }

  ngOnInit() {
    this.ConsultarTrayectos();
  }
  ConsultarTrayectos() {
    this.servicio.retornar()
    .subscribe((resultado: respuesta) => {
      this.datos = resultado;
      this.LlenarInfo();
    })
  }

  LlenarInfo() {
    this.datosMostrar = [];
    this.datos.objetoRespuesta.forEach(t => {
      this.datosMostrar.push({
        idRecaudo: t.idRecaudo,
   estacion: t.estacion,
    sentido: t.sentido,
    hora: t.hora,
    categoria: t.categoria,
    valorTabulado: t.valorTabulado,
    fecha: t.fecha
      });
    });
  }
}
