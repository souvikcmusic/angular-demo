import { EmployeeService } from './employee.service';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new EmployeeService()).toBeTruthy();
  });
});
