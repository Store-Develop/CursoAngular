import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { IngresoServicio } from './ingresos/ingreso.servicio';
import { EgresoServicio } from './egresos/egreso.servicio';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [IngresoServicio, EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
