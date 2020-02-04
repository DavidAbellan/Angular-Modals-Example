import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModEmpComponent } from '../mod-emp/mod-emp.component';
import { SpringConnectionService } from '../spring-connection.service';
import { AddSkillToEmployeeModalComponent } from '../add-skill-to-employee-modal/add-skill-to-employee-modal.component';
import { AddEmployeeToProjectModalComponent } from '../add-employee-to-project-modal/add-employee-to-project-modal.component';
import { AddToProjectComponent } from '../add-to-project/add-to-project.component';
import { AddSkillToProjectComponent } from '../add-skill-to-project/add-skill-to-project.component';
import { AddEmployeeToSkillComponent } from '../add-employee-to-skill/add-employee-to-skill.component';
import { EmployeelistComponent } from '../employeelist/employeelist.component';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.sass']
})
export class SearchingComponent implements OnInit {
  @Input() data : any;
  newForm : boolean = false;
  employee : any;

  constructor(private conx : SpringConnectionService, private dialog : MatDialog) { }
  
  
  ngOnInit() {
  }
  clickNew () {
    this.newForm = true;
   
  }
   async modify(id) {
     this.employee = await this.conx.getEmployeeById(id);
     this.dialog.open(ModEmpComponent, {data:{dataKey : this.employee}});

  }
  addSkill(id) {
   this.dialog.open(AddSkillToEmployeeModalComponent,{data:{dataKey:id}});
  } 
  addToProject(id){
   this.dialog.open(AddEmployeeToProjectModalComponent,{data:{dataKey:id}});
 }
  addEmployee(id){
    this.dialog.open(AddToProjectComponent,{data:{dataKey:id}});

  } 
  addSkillToProject(id){
    this.dialog.open(AddSkillToProjectComponent,{data:{dataKey:id}});

  }
  addEmployeeToSkill(skillID){
    this.dialog.open(AddEmployeeToSkillComponent,{data:{dataKey:skillID }});  

  }
  checkEmployeesSkill(skillID){
    this.dialog.open(EmployeelistComponent,{data:{dataKey:skillID }});
  }
}
