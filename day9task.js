//Task1 :
//for loop
var i;
var result = " ";
for (i = 1; i <= 10; i++) {
  result = result + i + " ";
}
console.log(result);
// while loop
var i = 1;
var result = " ";
while (i <= 10) {
  result = result + i + " ";
  i++;
}
console.log(result);
// do while
var i = 1;
var result = " ";
do {
  result = result + i + " ";
  i++;
} while (i <= 10);
console.log(result);
//Task2 :
//for loop
var n;
for (n = 1; n <= 40; n++) {
  if (n % 2 == 0) {
    console.log(n);
  }
}
//while loop
var i = 2;
while (i <= 40) {
  console.log(i);
  i += 2;
}

//do while
var i = 2;
do {
  console.log(i);
  i += 2;
} while (i <= 40);
//task3
var n;
for (n = 1; n <= 40; n++) {
  if (n % 2 != 0) {
    console.log(n);
  }
}
//while loop
var i = 1;
while (i <= 40) {
  console.log(i);
  i += 2;
}

//do while
var i = 1;
do {
  console.log(i);
  i += 2;
} while (i <= 40);

//task4
var marks = 40;
if (marks == 100 && marks >= 91) {
  console.log("Grade A+");
} else if (marks >= 80 && marks < 90) {
  console.log("Grade A");
} else if (marks >= 65 && marks < 79) {
  console.log("Grade B");
} else if (marks >= 55 && marks < 64) {
  console.log("Grade C");
} else if (marks >= 45 && marks < 35) {
  console.log("Grade D");
} else {
  console.log("fail");
}
