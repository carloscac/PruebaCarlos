import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConexionServicioService {

  constructor(private http: HttpClient) { }

  retornar() {
    // return this.http.get("https://jsonplaceholder.typicode.com/posts");
    return this.http.get("https://localhost:44347/api/Consumo/ListaRecaudos");
  }  

datosReporte(){
  return this.http.get("https://localhost:44347/api/Consumo/InformacionReporte");
  
}

}
