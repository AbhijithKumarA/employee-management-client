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
    
    AssetId:number = 0;
    AssetName: string = '';
    AssetType : string = '';
    AllocatedTo: string = '';
    AllocatedBy: string = '';
    SerialNumber:number = 0;
    Manufacturer: string = '';
    Model: string = '';
    LicenceNumber:number = 0;
    DateOfExpiry: string = '';

}