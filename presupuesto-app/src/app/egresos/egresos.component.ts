import { Component, Input, OnInit} from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent  implements OnInit{

  egresos:Egreso[]=[];
@Input() ingresoTotal:number = 0;
  constructor(private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }
 eliminarEgreso(egreso:Egreso){
this.egresoServicio.eliminar(egreso);

 }

 calcularPorcentaje (egreso:Egreso){
  return egreso.valor/this.ingresoTotal;
 }
}
