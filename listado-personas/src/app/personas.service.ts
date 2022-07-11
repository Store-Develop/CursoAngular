import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(private LoggingService: LoggingService, private dataServices: DataServices){}

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas(){
    return this.dataServices.cargarPersonas();
  }
  agregarPersona(persona: Persona){
    this.LoggingService.enviaMensajeAConsola('Agregamos persona con Nombre: ' + persona.nombre);
    if(this.personas == null){
      this.personas = null;
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);

  }

  encontrarPersona(index: number){
let persona: Persona = this.personas[index];
return persona;
  }

  modificarPersona(i: number, persona:Persona){
    let persona1 = this.personas[i];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(i, persona);
}

eliminarPersona(i: number){
  this.personas.slice(i, 1);
}
}
