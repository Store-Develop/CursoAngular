
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';


@Injectable()
export class DataServices{
constructor (private httpClient: HttpClient){}

cargarPersonas(){
  return this.httpClient.get('https://listado-personas-cd3a0-default-rtdb.firebaseio.com/datos.json');
}

//Guardar personas
guardarPersonas(personas: Persona[]){
  this.httpClient.put('https://listado-personas-cd3a0-default-rtdb.firebaseio.com/datos.json', personas)
  .subscribe(
    response => console.log("Resultado guardar Persona: " + response),
    error => console.log('Error al guardar Personas: '+ error)

  );
}

modificarPersona(i:number, persona: Persona){
  let url: string;
  url ='https://listado-personas-cd3a0-default-rtdb.firebaseio.com/datos' + i + '.json';
  this.httpClient.put(url, persona)
  .subscribe(
    response => console.log('resultado modificar Persona: ' + response),
    error => console.log('Error en modificar Persona: ' + error)
    )

}
}
