import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
  personas: Persona[] = [new Persona('Juan', 'Pérez'), new Persona('Luara','Juarez'), new Persona('Karla', 'Lara')];

  saludar = new EventEmitter<number>();

  constructor(private LoggingService: LoggingService){}
  agregarPersona(persona: Persona){
    this.LoggingService.enviaMensajeAConsola('Agregamos persona con Nombre: ' + persona.nombre);
    this.personas.push(persona);
  }

  encontrarPersona(index: number){
let persona: Persona = this.personas[index];
return persona;
  }

  modificarPersona(i: number, persona:Persona){
    let persona1 = this.personas[i];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
}

eliminarPersona(i: number){
  this.personas.slice(i, 1);
}
}
