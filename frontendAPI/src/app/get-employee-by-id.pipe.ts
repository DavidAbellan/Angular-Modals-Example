import { Pipe, PipeTransform } from '@angular/core';
import { SpringConnectionService } from '../app/spring-connection.service';

@Pipe({
  name: 'getEmployeeById'
})
export class GetEmployeeByIdPipe implements PipeTransform {
  constructor( private conx : SpringConnectionService  ) { }

async transform(value: any, ...args: any[]): Promise<any> {
     let employee : any ;
     let response : string;
     employee = await this.conx.getEmployeeById(value) ;
     response = employee.name + " " + employee.surname;
    return response;
  }

}
