import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: EmployeeModel = new EmployeeModel();

  constructor() { }

  ngOnInit(): void {
    
  }

}
