/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames() {
    // Add code here
    for (let i = 0; i < studentList.length; i++) {
        const nameOfStudent = studentList[i]; 
        console.log(nameOfStudent); 
    }
}

printStudentNames(); 

// Ignore the code below this line
module.exports = {
    studentList, 
    printStudentNames
}