export class Employee {
    employeeId: number = 0;
    firstName: string = '';
    lastName: string = '';
    dateOfBirth: Date;
    gender: string = '';
    address: string = '';
    departmentName: string = '';
    dateOfJoining: Date;
}

export class Department {
    departmentId: number = 0;
    departmentName: any;
    deptInChargeName: any;
    employeeId : number = 0;
}

export class Asset {
    
    assetId: number = 0;
    assetName: string = '';
    assetType: string = '';
    allocatedToId: number;
    allocatedTo: string = '';
    allocatedById: number;
    allocatedBy: string = '';
    serialNumber: number;
    manufacturer: string = '';
    model: string = '';
    licenceNumber: string = '';
    dateOfExpiry: Date;

}
