import { DepartmentEnum } from "../enums/department.enum";

export class EmployeeModel {
    id: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    department: DepartmentEnum | undefined;
}
