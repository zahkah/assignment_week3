// Q1

// Write a function that takes the above array as a parameter and function to calculate the total of the
// marks of each student, and returns the student name with the highest marks. Note: If you want you
// can add values to the objects of these arrays.
// HOF only

let student = [ 
    { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
    { name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
    { name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
    { name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];

function studentWithHighestMarks(array) {
    let mapArray = array.map((stuObj) => {
        let studentAverageMarks = stuObj.marks.reduce((acc, cV) => (acc + cV) / stuObj.marks.length, 0);
        return studentAverageMarks
    })

    let highestMark = mapArray.reduce((acc,cV) => acc > cV ? mapArray.indexOf(acc) : mapArray.indexOf(cV), -Infinity);
    

    return array[highestMark].name; 
}
console.log(studentWithHighestMarks(student))



// Q2
// Write a function which finds the minimum value in an array using HOF
array = [20, -2, 4, -11, 0, 25];
//  it should return -11
function findMinValue (array) {

    // using reduce function to compare acc and cV in order to get the smallest value in an array
    let minVal = array.reduce((acc, cV) => acc < cV? acc : cV, Infinity);
    return minVal;
}

console.log(findMinValue(array));



// Q3
// Write a function that counts the number of letters inside a string using HOF’s.
// For example, string name = “helloworld”
// It should return // 10

function lengthOfString(string){
    string = string.split("");
    let countLetters = string.reduce((acc) => acc += 1, 0);
    return countLetters;
}

console.log(lengthOfString("helloworld"))
