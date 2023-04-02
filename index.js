// Write your solution in this file!
const employee ={
    name:'Sam',
    streetAddress:'gachoe'
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee={...employee}
    return newEmployee.key=value
}

updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    return employee.key=value
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')

function deleteFromEmployeeByKey(employee, key){
    const {[key]:_, ...newEmployee} =  employee
    return newEmployee
}

deleteFromEmployeeByKey(employee, 'name')

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
destructivelyDeleteFromEmployeeByKey(employee, 'name')

