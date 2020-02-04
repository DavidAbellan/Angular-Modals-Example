import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { Observable } from 'rxjs';
import { ProjectIntfz} from '../app/interfaces/project-intfz';
import { SkillIntfz} from '../app/interfaces/skill-intfz';
import { EmployeeIntfz} from '../app/interfaces/employee-intfz';
import { AbsenceIntfz} from '../app/interfaces/absence-intfz';

@Injectable({
  providedIn: 'root'
})
export class SpringConnectionService {
   apiUrl : any = 'http://localhost:8080/postgressApp/';

  constructor( private http : HttpClient ) {
    
   }

  getSkillList () : Observable<SkillIntfz[]>{
    return this.http.get<SkillIntfz[]>(this.apiUrl + 'skillList');

  }
  getEmployeeList() : Observable<EmployeeIntfz[]>  {
    return this.http.get<EmployeeIntfz[]>(this.apiUrl + 'EmployeeList');

  }
  getProjectList() : Observable<ProjectIntfz[]> {
    return this.http.get<ProjectIntfz[]>(this.apiUrl + 'projectList'); 
  }
  getAbsenceList() : Observable<AbsenceIntfz[]> {
    return this.http.get<AbsenceIntfz[]>(this.apiUrl + 'absenceList'); 
  }
  createNewUser ( email, password, name, surname ) : Observable<JSON> {
    let id : string;
    let body : Object;

    id = name[0] + surname[0] + (Date.now().toString()) +(( Math.floor((Math.random()*1000))).toString());
    
    body = new Object ( {
       
        name,
        id,
        password,
        surname,
        email
      });

     
   return  this.http.post<JSON>(this.apiUrl + 'createEmployee', body);
   
  
  
}
 createNewProject(name, description,startDate): Observable<JSON>{
  let id : string;
  let body : Object;

  id = name[0] + description[0] + (Date.now() + Math.floor((Math.random()*1000))).toString();
  body = new Object ( {
   id,
   name,
   description,
   startDate
  });
  return this.http.post<JSON>(this.apiUrl + 'createProject', body );




}
 createNewSkill(name, description):Observable<JSON>{
  let id : string;
  let body : Object;
  id = name[0] + description[0] + (Date.now().toString()) +( Math.floor((Math.random()*1000))).toString();
  body = new Object ( {
   id,
   name,
   description
  });
return this.http.post<JSON>(this.apiUrl + 'createSkill', body );
}

async getEmployeeById (Id) {
  let employees : any;
  let employee : any;
  employees =  await axios.get(this.apiUrl + 'EmployeeList' );
  for (let emp of employees.data) {
    if (emp.id == Id) {
      employee = emp;
    }

  }
  return employee;
}
async getProjectById (Id) {
  let projects : any;
  let project : any;
  projects =  await axios.get(this.apiUrl + 'projectList' );
  for (let pro of projects.data) {
    if (pro.id == Id) {
      project= pro;
    }

  }
  return project;
}
async updateEmploye(employee){
   return await axios.put(this.apiUrl + 'updateEmployee',employee); 
}
addSkillToEmployee(skillId,employeeId){
  return this.http.post(this.apiUrl +"addEmployeeToSkill/"+ skillId + "/" + employeeId,{});
}
deleteSkillFromEmployee(skillId,employeeId) {
  return this.http.delete(this.apiUrl + "deleteSkillFromEmployee/"+ skillId + "/" + employeeId,{});
}
addEmployeeToProject(projectId,employeeId){
  return this.http.post(this.apiUrl + "addEmployeeToProject/" + projectId + "/" + employeeId ,{}); 

}
async deleteEmployeeFromProject(projectId,employeeId){
  //NO FUNCIONA
 return await axios.delete(this.apiUrl + "deleteEmployeeFromProject/" + projectId + "/" + employeeId);
}
addSkillToProject(projectId,skillId){
return this.http.post(this.apiUrl + "addSkillToProject/" + projectId + "/" + skillId,{});
}
}
