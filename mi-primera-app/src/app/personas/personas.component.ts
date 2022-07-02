import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']

})
export class PersonasComponent{
desabilitar = false;
mensaje = 'No se ha agregado ninguna persona.';
titulo = '';

agregarPersona(){
this.mensaje = 'Persona Agregada';
}

modificarTitulo(event: Event){
  console.log('Entrando a modo modificar titulo.');
  this.titulo = (<HTMLInputElement>event.target).value;
}
}
