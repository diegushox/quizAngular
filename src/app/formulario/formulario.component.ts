import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
      nombre:['', Validators.required],
      apellidos:['', Validators.required],
      pais:['', Validators.required],
      Ciudad:['', Validators.required],
      genero:['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
  ValidarDatos(){

    console.log(this.formulario.value);
    this.Cancelar();
    
  }

  Cancelar(){
      this.formulario=this.form.group({
        nombre:['', Validators.required],
        apellidos:['', Validators.required],
        pais:['', Validators.required],
        Ciudad:['', Validators.required],
        genero:['', Validators.required]
      })
  }
    
}


