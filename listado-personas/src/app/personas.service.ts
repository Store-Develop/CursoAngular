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
}
