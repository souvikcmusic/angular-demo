import { Component, OnInit } from '@angular/core';
import { DepartmentEnum } from 'src/app/enums/department.enum';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeesList: EmployeeModel[] = [];
  departmentEnum = DepartmentEnum;
  newEmployee = new EmployeeModel();
  errorMessage: string | undefined;
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe((employees: EmployeeModel[]) => {
        this.employeesList = employees;
      });
  }

  addEmployee(): void{
    if(this.newEmployee.firstName && this.newEmployee.lastName && this.newEmployee.id) {
      let hasUniqueId = true;
      this.employeesList.forEach(employee => {
        if(this.newEmployee.id == employee.id) {
          hasUniqueId = false;
        }
      });

      if(hasUniqueId) {
        this.employeesList.push(this.newEmployee);
        this.newEmployee = new EmployeeModel();
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Enter unique employee id';
      }
      
    } else {
      this.errorMessage = 'All details are mandatory';
    }
  }
}
