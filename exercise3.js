//3a

//Step 4
const classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];
//Step 5
const str = classRoster.toString();
console.log(str);
//Step 6
console.log(classRoster);

//Step 7
classRoster.push("Fiona", "Nancy");
console.log(classRoster);

//Step 8
const shifted = classRoster.shift();
console.log(shifted);
//Step 9
console.log(classRoster);

//Step 10
console.log(classRoster.length);



// 3b
//Step 1
const classInfo = {
    className: 'ENSF381: Full-Stack Web Development',
    instructor:'Dr. Smith',
    students: classRoster,
    details: { 
        semester: 'Winter',
        year: 2025
    },

};
// Step 2
classInfo.schedule = ['Monday','Wednesday', 'Friday'];

//Step 3

classInfo.instructor = 'Dr.Abdellatif';

//Step 4
console.log(classInfo.className);
console.log(classInfo.instructor);
console.log(classInfo.students);
//Step 5
console.log(classInfo.details.semester);
//Step 6
console.log(classInfo);
//Step 7
const {className, students} = classInfo;
console.log(className);
console.log(students);
//Step 8
const {details: {semester,year}} = classInfo;

console.log(semester);
console.log(year);
//Step 9 -11
const[student1, student2, ...remainingStudents] = classRoster;
console.log(student1);
console.log(student2);
console.log(remainingStudents);
