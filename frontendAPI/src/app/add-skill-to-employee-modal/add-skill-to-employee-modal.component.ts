import { Component, OnInit, Inject } from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-add-skill-to-employee-modal',
  templateUrl: './add-skill-to-employee-modal.component.html',
  styleUrls: ['./add-skill-to-employee-modal.component.sass']
})
export class AddSkillToEmployeeModalComponent implements OnInit {
  skills : any;
  employeeId :any;
  employeeSkills:any;
  employee:any;

  constructor( private conx : SpringConnectionService, 
    public dialogRef : MatDialogRef<AddSkillToEmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,) { }

  ngOnInit() {
      this.employeeId = this.data.dataKey;
      this.chargeSkills(); 
  }

  async chargeSkills () {
    this.skills = this.conx.getSkillList().subscribe(
      resp => this.skills = resp,
      error => console.log("ERROR")
    );
    this.employee = await this.conx.getEmployeeById(this.employeeId);
    this.employeeSkills = this.employee.employeeSkills;


  }

  addSkill(id){
    this.conx.addSkillToEmployee(id,this.employeeId).subscribe(
      resp => console.log("añadido"),
      error => console.log("Error")
    );
    window.location.reload();

  }
  deleteSkill(id){
    this.conx.deleteSkillFromEmployee(id,this.employeeId).subscribe(
      resp => console.log("borrado"),
      error => console.log("Error")
    ) ;
    window.location.reload();
  }

}
