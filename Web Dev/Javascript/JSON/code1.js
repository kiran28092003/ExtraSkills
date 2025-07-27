let student = {
    name: "Kiran",
    age: 21,
    course:'BE'
}

student.rollno = 43

for (let key in student) {
    console.log(key+':',student[key])
}