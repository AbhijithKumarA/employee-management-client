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
    employeeId : number;
}

export class Asset {
    
    assetId: number = 0;
    assetName: string = '';
    assetType: string = '';
    allocatedToId: string;
    allocatedTo: number;
    allocatedById: string;
    allocatedBy: number;
    serialNumber: number;
    manufacturer: string = '';
    model: string = '';
    licenceNumber: string = '';
    dateOfExpiry: Date;

}

export class AssetRequest {
    assetRequestId: number = 0;
    requestingEmployeeId: number;
    employeeName: string;
    assetId: number;
    asset: string;
    numberOfDays: number;
    requestedOn: Date;
    approvedOn: Date;
    approvedById: number;
    approvedBy: string;
    approved: boolean;
    reason: string;
}
