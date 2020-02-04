import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SpringConnectionService} from '../spring-connection.service';
import { SkillIntfz } from '../interfaces/skill-intfz';


@Component({
  selector: 'app-add-skill-to-project',
  templateUrl: './add-skill-to-project.component.html',
  styleUrls: ['./add-skill-to-project.component.sass']
})
export class AddSkillToProjectComponent implements OnInit {
   projectId : string ;
   skills : any;
  constructor(private conx : SpringConnectionService, 
    public dialogRef : MatDialogRef<AddSkillToProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,) { }

  ngOnInit() {
    this.projectId = this.data.dataKey;
    console.log(this.projectId);
    this.chargeSkills();
  }
  chargeSkills () {
    this.skills = this.conx.getSkillList().subscribe(
      resp => this.skills = resp,
      error => console.log("ERROR")
    );}
  addSkill(skillid){
    this.conx.addSkillToProject(this.projectId,skillid).subscribe(
        res => console.log("skill añadida"),
        error => console.log("ERROR")
    );
    window.location.reload();
  }  
}
