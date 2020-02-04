import { Component, OnInit } from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';


@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.sass']
})
export class NewskillComponent implements OnInit {
  name : String;
  description : String; 

  constructor(private ApiCall : SpringConnectionService) { }

  ngOnInit() {
  }
  createSkill(e){
    this.name = e.toElement.form.name.form.name.value;
    this.description = e.toElement.form.elements[1].value;
    
    this.ApiCall.createNewSkill(this.name,this.description).subscribe(
      resp => console.log("Skill Created!"),
      error => console.log("Error")
    );

    window.location.reload();
  }
  

}
