import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{


  nombreInput:string = '';
  apellidoInput:string = '';
  i:number;
   modoEdicion:number;

 constructor(private LoggingService:LoggingService,
  private PersonasService: PersonasService,
  private router: Router,
  private route: ActivatedRoute
  ) {
  this.PersonasService.saludar.subscribe(
    (i:number)=> alert("El indice es: " + i)
    );
 }

 ngOnInit(){
this.i = this.route.snapshot.params["id"];
this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
if(this.modoEdicion != null && this.modoEdicion === 1){
  let persona: Persona = this.PersonasService.encontrarPersona(this.i);
  this.nombreInput = persona.nombre;
  this.apellidoInput = persona.apellido;
}
 }

onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.PersonasService.modificarPersona(this.i, persona1);
    }else{
      this.PersonasService.agregarPersona(persona1);
    }
    //this.LoggingService.enviaMensajeAConsola('Enviamos persona con ' +'Nombre:'+ persona1.nombre + ' Apellido: '+ persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.PersonasService.agregarPersona(persona1);
this.router.navigate(['personas']);
  }

eliminarPersona(){
  if(this.i != null){
    this.PersonasService.eliminarPersona(this.i);
  }
  this.router.navigate(['personas']);
}

}
