import { Component, OnInit } from '@angular/core';
import { ConexionServicioService } from './conexion-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'app';
// }

export class AppComponent implements OnInit {
  post : any;
  titulosColumnas = ['código de usuario', 'código de post', 'titulo', 'descripción'];
  constructor(private postblogService: ConexionServicioService) { }

  ngOnInit() {
    // this.postblogService.retornar()
    //   .subscribe(result => this.post = result)
  }
}
