import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormularioComponent } from './components/formulario/formulario.component';
const routes: Routes = [
  //vistas
  {
    path: 'formulario',
    component: FormularioComponent
  }
];
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FormularioComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
