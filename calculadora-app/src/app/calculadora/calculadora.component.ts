import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {
  operandoA: number = 0;
  operandoB: number = 0;

  @Output() resultadoSuma = new EventEmitter<number>();

sumar():void {
  let resultado = this.operandoA + this.operandoB;
  this.resultadoSuma.emit(resultado);
}


restar():void {
  let resultado = this.operandoA - this.operandoB;
  this.resultadoSuma.emit(resultado);
}

multiplicar():void {
  let resultado = this.operandoA * this.operandoB;
  this.resultadoSuma.emit(resultado);
}

dividir():void {
  let resultado = this.operandoA / this.operandoB;
  this.resultadoSuma.emit(resultado);
}
}
