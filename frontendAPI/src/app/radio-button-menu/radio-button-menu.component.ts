import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button-menu',
  templateUrl: './radio-button-menu.component.html',
  styleUrls: ['./radio-button-menu.component.sass']
})
export class RadioButtonMenuComponent implements OnInit {
  formType : string = "";
  empleadoForm : boolean = false;
  proyectoForm : boolean = false;
  tecnologiaForm : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  chooseOptionForm (value) {
    this.formType = value.target.defaultValue;
    console.log(this.formType);
    if (this.formType == 'empleado'){
       this.empleadoForm = true;
       this.proyectoForm = false;
       this.tecnologiaForm = false;
    }
    if (this.formType == 'proyecto'){
      this.empleadoForm = false;
       this.proyectoForm = true;
       this.tecnologiaForm = false;

    }
    if (this.formType == 'tecnologia'){
      this.empleadoForm = false;
      this.proyectoForm = false;
      this.tecnologiaForm = true;

     

    }

  }

}
