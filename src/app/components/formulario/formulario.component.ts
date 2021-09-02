import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-component',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor() {
    this.selector_input = ['uno', 'dos', 'tres'];
    this.texto_input = '';
  }
  public verifica() {
  /*alert(
      'verificando ' +
        this.numerico_input +
        '||' +
        this.texto_input +
        ' || ' +
        this.seleccionado_input.length
    );*/
    if (
      this.numerico_input != null &&
      this.texto_input != '' &&
      (this.seleccionado_input.length>0)
    )
      this.botonDeshabilitado = false;
    else 
      this.botonDeshabilitado = true;
  }

  ngOnInit(): void {}
  public texto_input: string;
  public numerico_input: number;
  public comentario_input: string;
  public selector_input: string[];
  public seleccionado_input: string;
  public botonDeshabilitado = true;
}
