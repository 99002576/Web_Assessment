let student = function(id, name, address){
    this.stuId = id;
    this.stuName = name;
    this.stuAdd = address;
   } 
    
   let empManager = function(){
    this.empData = []; 
    
    this.addStudent = function(emp){
    this.empData.push(emp);

    }
    
    this.deleteStudent = function(id){
    let emp = this.empData.find(function(e){
    return e.stuId == id
    });
    let index = this.empData.indexOf(emp);
    this.empData.splice(index, 1);
    alert("Student deleted successfully from the database"); 
    }
    
    this.findStudent = function(id){
    let emp = this.empData.find(function (e) {
    return e.stuId == id
    });
    if(emp == null)
    throw `Student with ID ${id} not found`;
    return emp;
    }
    this.updateStudent = function(emp){
    for (let index = 0; index < this.empData.length; index++) {
    let element = this.empData[index];
    if(element.stuId == emp.stuId){
    element.stuName = emp.stuName;
    element.stuAdd = emp.stuAdd;
    return;
    }
    }
    throw "Student not found to update"; 
    }
    this.getAll = function(){
    return this.empData;
    }
   }