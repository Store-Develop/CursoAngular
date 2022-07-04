import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona('Juan', 'Pérez'), new Persona('Luara','Juarez'), new Persona('Karla', 'Lara')];

  constructor(private LoggingService: LoggingService){}

  personaAgregada(persona: Persona){
    this.LoggingService.enviaMensajeAConsola('Enviamos al arreglo la nueva persona con Nombre: ' + persona.nombre + ' Apellido: ' + persona.apellido);
    this.personas.push(persona);
  }

}
