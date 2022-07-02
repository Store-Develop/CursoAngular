import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']

})
export class PersonasComponent{
desabilitar = false;
mensaje = 'No se ha agregado ninguna persona.';

agregarPersona(){
this.mensaje = 'Persona Agregada';
}
}
