import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  { path: 'Tabla', component: TablaDatosComponent },
  { path: 'Reporte', component: ReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }