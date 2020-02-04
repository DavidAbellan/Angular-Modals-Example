import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SpringConnectionService } from '../spring-connection.service'
@Component({
  selector: 'app-mod-emp',
  templateUrl: './mod-emp.component.html',
  styleUrls: ['./mod-emp.component.sass']
})
export class ModEmpComponent implements OnInit {
  employee : any;


  constructor(
    public dialogRef : MatDialogRef<ModEmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,
    public conx : SpringConnectionService
  ) { }

  ngOnInit() {
    this.employee = this.data.dataKey;
  }
  onUpdate(e){
    this.employee.email = e.toElement.form.elements[0].value;
    this.employee.password = e.toElement.form.elements[1].value;
    this.employee.name = e.toElement.form.elements[2].value;
    this.employee.surname = e.toElement.form.elements[3].value;

    
   this.conx.updateEmploye(this.employee);

    window.location.reload();


  }

}
