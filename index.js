const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// let splitTutorials = tutorials.map((titles) => titles.split(" "))
  
// let capitalizedTutorials = splitTutorials.map(titles => titles.map(word => word.charAt(0).toUpperCase() + word.slice(1)))

// let correctTutorials = capitalizedTutorials.map(titles => titles.join(" "))

// console.log();

const titleCased = function() {
  let splitTutorials = tutorials.map((titles) => titles.split(" "));
  
  let capitalizedTutorials = splitTutorials.map(titles => titles.map(word => word.charAt(0).toUpperCase() + word.slice(1)));

  let correctTutorials = capitalizedTutorials.map(titles => titles.join(" "));

  return correctTutorials
}

console.log(titleCased());

// const skiSchool = ["aki", "guadalupe", "lei", "aalam"];

// const rollCall = [];
// 1. for(const student of skiSchool) {
//   rollCall.push(student + " the skier")}

// 2. function studentRollCall(student) {
//   return student + " the skier"
// }
// 3. const rollCall = skiSchool.map(studentRollCall)

// 4. const rollCall = skiSchool.map(function (student){ 
//   return student + " the skier"})

// 5. const rollCall = skiSchool.map(student => student + " the skier")
 
// const robots = [
//   {name: "Johnny 5", modes: 5, isActivated: false},
//   {name:"C3PO", modes: 3, isActivated: false},
//   {name: "Sonny", modes: 2.5, isActivated: false},
//   {name: "Baymax", modes: 1.5, isActivated: false},
// ];

// const activateRobots = robots.map((robot) => {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   })
// })
// console.log(activateRobots);
// console.log(robots);
// console.log(rollCall)
// console.log(skiSchool)