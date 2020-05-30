interface Employee {
    EmpNo: number;
    Name?: string;
}


function getEmpDetails(emp: Employee) {
    console.log('EmpNo: '+emp.EmpNo);
    console.log('Name: '+emp.Name);
}

getEmpDetails({EmpNo: 1, Name: 'Abc'});
getEmpDetails({EmpNo: 1});


class Emp implements Employee {
    EmpNo: number;
    Name: string;

    constructor() {
        this.EmpNo = 1;
        this.Name = "Xyz";
    }
}