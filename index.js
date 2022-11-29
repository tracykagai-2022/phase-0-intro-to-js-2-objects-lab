// Write your solution in this file!
const employee = {
    name:"wambui",
    streetAdress: "Nyeri",
};
function updateEmployeeWithKeyandValue (employee,key,Value) {
    const newEmployee = {...employee};
    newEmployee[key]=Value;
    return employee
}
function destructivelyUpdateEmployeewithKeyandValue(employee, key, Value){
    employee[key]=value;
return employee;
}
function deleteFromEmployeeByKey(employee,key) {
    const newEmployee = [...employee];
    delete newEmployee.name;
    return newEmployee
}
function destructiveDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}