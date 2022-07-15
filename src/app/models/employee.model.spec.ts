import { EmployeeModel } from './employee.model';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new EmployeeModel()).toBeTruthy();
  });
});
