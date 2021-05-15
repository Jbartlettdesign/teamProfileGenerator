const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

test("test to see if employee contains array", () => {
    const employee = new Employee().employeePayRoll = [new Intern];

    //expect(employee.name).toBe();
    console.log(employee);
    expect(employee).toEqual(
        expect.arrayContaining([expect.any(Object)]))
});
    