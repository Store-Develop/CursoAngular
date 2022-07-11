
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';


@Injectable()
export class DataServices{
constructor (private httpClient: HttpClient){}

//Guardar personas
guardarPersonas(personas: Persona[]){
  this.httpClient.put('https://listado-personas-cd3a0-default-rtdb.firebaseio.com/datos.json', personas)
  .subscribe(
    response => console.log("Resultado guardar Persona: " + response),
    error => console.log('Error al guardar Personas: '+ error)

  );
}
}
