import { Component, OnInit } from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';



@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.sass']
})
export class Componente1Component implements OnInit {
  data : any;
 

  constructor(private ApiCall : SpringConnectionService) {
  }
  ngOnInit() {

  }
  getProjects  () {
    this.ApiCall.getProjectList().subscribe(
      data => this.data = data,
      error => console.log(error)
    );
 }
  getEmployees () {
  this.ApiCall.getEmployeeList().subscribe(
    data => this.data = data,
    error => console.log(error)
  )
  }
  getSkills() {
  this.ApiCall.getSkillList().subscribe(
    data => this.data = data,
    error => console.log(error)
    );
  }
  getAbsences() {
  this.ApiCall.getAbsenceList().subscribe(
    data => this.data = data,
    error => console.log(error)
  );


 }


 setEmpty() {
   this.data = null;
 }

}
