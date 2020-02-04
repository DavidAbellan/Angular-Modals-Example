import { Component, OnInit ,Inject} from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-employee-to-project-modal',
  templateUrl: './add-employee-to-project-modal.component.html',
  styleUrls: ['./add-employee-to-project-modal.component.sass']
})
export class AddEmployeeToProjectModalComponent implements OnInit {
projects : any ;
employeeId : string;
employee :any;

  constructor(private conx : SpringConnectionService, 
    public dialogRef : MatDialogRef<AddEmployeeToProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,) { }

  ngOnInit() {
    this.employeeId = this.data.dataKey;
     this.chargeProjects();

  }
  async chargeProjects() {
      this.conx.getProjectList().subscribe(
        resp => this.projects =resp,
        error => console.log("Error")

     );
     this.employee = await this.conx.getEmployeeById(this.employeeId);

  }
 addToProject(id){
      this.conx.addEmployeeToProject(id,this.employeeId).subscribe(
        resp =>console.log("añadido"),
        error => console.log("error")
      ) ;
      window.location.reload();
  }
}
