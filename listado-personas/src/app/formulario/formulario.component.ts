import { Component, ElementRef, ViewChild, } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  //nombreInput:string = '';
 // apellidoInput:string = '';
 @ViewChild('nombreInput') nombreInput: ElementRef;
 @ViewChild('apellidoInput') apellidoInput: ElementRef;
 constructor(private LoggingService:LoggingService, private PersonasService: PersonasService){}

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this.LoggingService.enviaMensajeAConsola('Enviamos persona con ' +'Nombre:'+ persona1.nombre + ' Apellido: '+ persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.PersonasService.agregarPersona(persona1);
  }
}
