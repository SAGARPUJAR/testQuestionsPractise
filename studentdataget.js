var readlineSync = require('readline-sync')

let studentList = [];
console.log('Enter Details of 5 Students : ');
for (let i = 1; i <= 2; i++) {
  var UserName = readlineSync.question("Enter Name : ");
  var UnitTestMarks = readlineSync.question("Enter unittest marks : ");
  var PrefinalMarks = readlineSync.question("Enter PrefinalMarks : ");
  var finalMarks1 = readlineSync.question("Enter finalMarks : ");
  var obj = {
    name: UserName,
    unittest: UnitTestMarks,
    prefinal: PrefinalMarks,
    finalmarks: finalMarks1,
    total: Number(UnitTestMarks) + Number(PrefinalMarks) + Number(finalMarks1)
  }

  studentList.push(obj)
}


for (let i = 0; i < studentList.length; i++) {
  console.log("Name : " + studentList[i].name + " unitest marks : " + studentList[i].unittest + "Pre final marks : " + studentList[i].prefinal + " Final Score : " + studentList[i].finalmarks + "\n" + "Total Marks : " + studentList[i].total)
}



function displayData(studentlist) {
  for (let i = 0; i < studentList.length; i++) {
    console.log('Name : ' + studentlist[i].name + "\n" + "unit test marks : " + studentlist[i].unittest + "\n" + "Pre Final Marks : " + studentlist[i].prefinal + "\n" + "Final Marks : " + studentlist[i].finalmarks + "\n" + " Total : " + studentlist[i].total)
  }
}

function FindWhosHighest(studentList) {
  // for(let i=0;i<studentList.length;i++)
  // {
  if (studentList[0].total > studentList[1].total) {
    console.log(studentList[0].name + " is Having " + studentList[0].total + " Hence He is having More Marks than " + studentList[1].name)
  }
  else {
    console.log(studentList[1].name + " is Having " + studentList[1].total + " Hence He is having More Marks than " + studentList[0].name)
  }
  // }
}

function findAvg(studentList) {
  var student1Avg = (studentList[0].total) / 300 * 100;

  var student2Avg = (studentList[1].total) / 300 * 100;

  console.log("Average of : " + studentList[0].name + " is : " + student1Avg.toFixed(2) + "%");
  console.log("Average of : " + studentList[1].name + " is : " + student2Avg.toFixed(2) + "%");
}

displayData(studentList)
FindWhosHighest(studentList)
findAvg(studentList)

