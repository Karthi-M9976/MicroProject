import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee';
  employee : Employee;
  result : string;
  employeeArr: Employee[];
  flag :boolean;
  constructor(private service : EmployeeService){
    this.employee = new Employee();
    this.result ="";
    this.employeeArr=[];
    this.flag=false;
  }
  insert(data:any){
    this.employee.id = data.stdId;
    this.employee.stdName = data.stdName;
    this.employee.stdSalary=data.empSalary;
    this.employee.Feessts=data.Feessts;

    this.result=this.service.insert(this.employee);
   
  }
  update(data:any){
    this.employee.id =data.stdId;
    this.employee.stdName = data.stdName;
    this.employee.stdSalary=data.empSalary;
    this.employee.Feessts=data.Feessts;

    this.result=this.service.update(this.employee);
   
  }
  deletestd(data:any){
    

    this.result=this.service.deletestd(data.empId);
   
  }
  find(data : any){
    this.employee=this.service.find(data.empId);
    this.result=this.employee.id+""+this.employee.stdName+""+this.employee.stdSalary+""+this.employee.Feessts;
  }
  findall(){
    this.employeeArr=this.service.findall();
    this.flag=true;
  }
}
