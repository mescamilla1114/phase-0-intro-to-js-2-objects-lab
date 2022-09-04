// Write your solution in this file!
const employee = {
    name: "Michael",
    StreetAddress: "funstreet",
}

function updateEmployeeWithKeyAndValue(employee, name, value){
    const newObj = { ... employee };

    newObj.name = "Sam";
    newObj.streetAddress = "11 Broadway";
  
    return (newObj);
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,StreetAddress, value){
    employee.streetAddress = "12 Broadway";
    return(employee);
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {... employee};
    delete newEmployee.name;
    return(newEmployee);
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return(employee);

}
