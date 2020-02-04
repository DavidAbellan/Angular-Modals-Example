import { Component, OnInit , Inject} from '@angular/core';
import { SpringConnectionService } from '../spring-connection.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.sass']
})
export class EmployeelistComponent implements OnInit {
  employees : any;
  constructor(private conx : SpringConnectionService, 
    public dialogRef : MatDialogRef<EmployeelistComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,) { }

  ngOnInit() {
  }
  

}
