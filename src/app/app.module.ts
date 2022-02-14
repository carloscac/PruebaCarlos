import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';
import { HttpClientModule } from '@angular/common/http';
import { ConexionServicioService } from './conexion-servicio.service';
import { AppRoutingModule } from './/app-routing.module';
import { ReporteComponent } from './reporte/reporte.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaDatosComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    AppRoutingModule
  ],
  providers: [ConexionServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
