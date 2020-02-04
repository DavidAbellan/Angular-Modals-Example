import { Component, OnInit } from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.sass']
})
export class NewProjectComponent implements OnInit {
  name : String;
  description : String; 
  startdate :Date;
  constructor(private ApiCall : SpringConnectionService) { }

  ngOnInit() {
  }
   createProject(e){
   
    this.name = e.target.form.elements[0].value;
    this.description = e.target.form.elements[1].value;
    this.startdate = e.target.form.elements[2].value


    this.ApiCall.createNewProject(this.name,this.description,this.startdate).subscribe(
      resp => console.log("Proyecto Creado"),
      error=> console.log("error")
    );
    window.location.reload();

    


  }

}
