// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: ''
};


function updateEmployeeWithKeyAndValue() {
    const newemployee = {...employee};

    newemployee.streetAddress = '11 Broadway';
    return newemployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue () {
    employee.streetAddress = '12 Broadway';

    return employee;

}


function deleteFromEmployeeByKey() {
    let newemployee = {employee};
    
    delete newemployee.name;
    return newemployee;

}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}