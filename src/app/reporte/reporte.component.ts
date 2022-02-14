import { Component, OnInit } from '@angular/core';
import { ConexionServicioService } from '../conexion-servicio.service';
import { reporte } from '../models/reporte.model';
import { respuestaReporte } from '../models/respuestaReporte.model';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  public datosReporte = [];
  public resultado: respuestaReporte;
  public totalandesCantidad: number;
  public totalandesValor: number;
  public totalfuscaCantidad: number;
  public totalfuscaValor: number;
  public totaluniSabanaCantidad: number;
  public totaluniSabanaValor: number;

  public totalCantidad : number;
  public totalValor: number;

  constructor(private servicio: ConexionServicioService) { }

  ngOnInit() {
    this.ConsultarDatosReporte();
  }

  ConsultarDatosReporte() {
    this.servicio.datosReporte()
      .subscribe((resultado: respuestaReporte) => {
        this.resultado = resultado;
        this.LlenarInfo();
      })
  }

  LlenarInfo() {
    this.datosReporte = [];
    this.totalandesCantidad = 0;
    this.totalandesValor = 0;
    this.totalfuscaCantidad = 0;
    this.totalfuscaValor = 0;
    this.totaluniSabanaCantidad = 0;
    this.totaluniSabanaValor = 0;

    this.totalCantidad = 0;
    this.totalValor = 0;

    this.resultado.objetoRespuesta.forEach(t => {
      this.datosReporte.push({
        fecha: t.fecha,
        andesCantidad: t.andesCantidad,
        andesValor: t.andesValor,
        fuscaCantidad: t.fuscaCantidad,
        fuscaValor: t.fuscaValor,
        uniSabanaCantidad: t.uniSabanaCantidad,
        uniSabanaValor: t.uniSabanaValor
      });
      this.totalandesCantidad += t.andesCantidad;
      this.totalandesValor += t.andesValor;
      this.totalfuscaCantidad += t.fuscaCantidad;
      this.totalfuscaValor += t.fuscaValor;
      this.totaluniSabanaCantidad += t.uniSabanaCantidad;
      this.totaluniSabanaValor += t.uniSabanaValor;
 
    });
    this.totalCantidad = this.totalandesCantidad + this.totalfuscaCantidad + this.totaluniSabanaCantidad;
    this.totalValor = this.totalandesValor + this.totalfuscaValor + this.totaluniSabanaValor;
  }

}
