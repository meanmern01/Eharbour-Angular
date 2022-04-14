export interface EmployeeName {
    employee_name: string;
    employee_code: string;
    employee_id: number;
}

export interface TableAdditionalOptions {
    leaveType?: string;
    search_value?: string;
    start: number;
    limit: number;
    search_string: string; 
}

export interface TimesheetDataType{
    timesheet_id:number;
    status:string;
}