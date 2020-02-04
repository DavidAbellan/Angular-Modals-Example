import { Component, OnInit ,Inject} from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-to-project',
  templateUrl: './add-to-project.component.html',
  styleUrls: ['./add-to-project.component.sass']
})
export class  AddToProjectComponent implements OnInit {
employees : any ;
projectId : string;
project :any;
employeesInProject :any

  constructor(private conx : SpringConnectionService, 
    public dialogRef : MatDialogRef< AddToProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,) { }

  ngOnInit() {
    this.projectId = this.data.dataKey;
    this.chargeEmployees();

  }
  async chargeEmployees() {
    this.project = await this.conx.getProjectById(this.projectId);
    console.log(this.project);
      this.conx.getEmployeeList().subscribe(
        resp => this.employees =resp,
        error => console.log("Error")

     );
     this.employeesInProject = this.project.projectsEmployees ;
     console.log("EMpleados en el proyecto",this.employeesInProject);

  }
 addToProject(id){
      this.conx.addEmployeeToProject(this.projectId,id).subscribe(
        resp => console.log("Añadido!"),
        error => console.log("error")
      ) ;
      window.location.reload();
  }
  deleteFromProject(id) {
     this.conx.deleteEmployeeFromProject(this.projectId,id);
     window.location.reload();
     
  }
}
