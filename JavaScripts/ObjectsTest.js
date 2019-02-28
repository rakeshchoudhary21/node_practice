//First way to create object.
var Employee = function(name,id,salary,deptId){
    this.id = id;
    this.salary = salary;
    this.name = name;
    this.deptId = deptId;

    this.getName = () => {
        return name;
    }

    //If u are setting the name in this, then getName should also return from this
    this.setName = (newName) => name = newName;

    this.setSalary = (salary) => this.salary = salary;

    //this will return the salary set on original object.
    this.getSalary = () => {
        return salary;
    }
}


var rakesh = new Employee('RAKESH',1,10000,1);
rakesh.setName('NISHU');
console.log(rakesh.getName())

rakesh.setSalary(20000)
console.log(rakesh.getSalary()) //prints 10000

//creating children of Emp
var Person = function(name){
    this.name = name;
}
