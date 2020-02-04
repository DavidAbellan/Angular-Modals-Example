import { Component, OnInit } from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.sass']
})
export class NewUSerComponent implements OnInit {
  email : string;
  password : string;
  name : string;
  surname : string;

  constructor(private ApiCall : SpringConnectionService) { }

  ngOnInit() {
  }
   createUser(value) {
    this.email = value.target.form.elements[0].value;
    this.password = value.target.form.elements[1].value;
    this.name = value.target.form.elements[2].value;
    this.surname = value.target.form.elements[3].value;
     this.ApiCall.createNewUser(this.email,this.password,this.name,this.surname).subscribe (
       Response => console.log("Empleado"),
       error => console.log("error")
     );
    window.location.reload();
  }

}
