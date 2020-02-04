import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpringConnectionService } from './spring-connection.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchingComponent } from './searching/searching.component';
import { RadioButtonMenuComponent } from './radio-button-menu/radio-button-menu.component';
import { NewUSerComponent } from './new-user/new-user.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewskillComponent } from './newskill/newskill.component';
import { FormsModule} from '@angular/forms';
import { GetEmployeeByIdPipe } from './get-employee-by-id.pipe';
import { ModalModule} from 'ngx-bootstrap/modal';
import { BsDropdownModule,TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule} from '@angular/common';
import { ModEmpComponent } from './mod-emp/mod-emp.component';
import { AddSkillToEmployeeModalComponent } from './add-skill-to-employee-modal/add-skill-to-employee-modal.component';
import { AddEmployeeToProjectModalComponent } from './add-employee-to-project-modal/add-employee-to-project-modal.component';
import { AddToProjectComponent } from './add-to-project/add-to-project.component';
import { AddSkillToProjectComponent } from './add-skill-to-project/add-skill-to-project.component';
import { AddEmployeeToSkillComponent } from './add-employee-to-skill/add-employee-to-skill.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

@NgModule({
  declarations: [
   
    AppComponent,
    Componente1Component,
    SearchingComponent,
    RadioButtonMenuComponent,
    NewUSerComponent,
    NewProjectComponent,
    NewskillComponent,
    GetEmployeeByIdPipe,
    ModEmpComponent,
    AddSkillToEmployeeModalComponent,
    AddEmployeeToProjectModalComponent,
    AddToProjectComponent,
    AddSkillToProjectComponent,
    AddEmployeeToSkillComponent,
    EmployeelistComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
   
  ],
  exports:[BsDropdownModule,TooltipModule,ModalModule],
  providers: [SpringConnectionService],
  bootstrap: [AppComponent],
  entryComponents : [ModEmpComponent,AddSkillToEmployeeModalComponent,
    AddEmployeeToProjectModalComponent, AddToProjectComponent, AddSkillToProjectComponent,
    AddEmployeeToSkillComponent, EmployeelistComponent]
})
export class AppModule { }
