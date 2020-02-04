import { Component, OnInit, Inject } from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-employee-to-skill',
  templateUrl: './add-employee-to-skill.component.html',
  styleUrls: ['./add-employee-to-skill.component.sass']
})
export class AddEmployeeToSkillComponent implements OnInit {
  skillId : string;
  employees : any;
  constructor(private conx : SpringConnectionService, 
    public dialogRef : MatDialogRef<AddEmployeeToSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,) { }

  ngOnInit() {
    this.skillId = this.data.dataKey;
    this.chargeEmployees();
  }
  chargeEmployees() {
    this.conx.getEmployeeList().subscribe(
      resp => this.employees =resp,
      error => console.log("Error")

   );}
   addToSkill(employeeID){
    this.conx.addSkillToEmployee(this.skillId,employeeID).subscribe(
      resp => console.log("Añadido!"),
      error => console.log("Error")
    )
    window.location.reload();
   }
   
}
