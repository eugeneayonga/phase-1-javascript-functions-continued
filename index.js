// code your solution here
function saturdayFun(activityOne = "roller-skate", activityTwo = "bathe my dog") {
    if (saturdayFun === activityOne) {
        return `This Saturday, I want to ${activityTwo}!`;
    } else {
        return `This Saturday, I want to ${activityOne}!`;
    }
}
console.log(saturdayFun(activityTwo));


// Function Expression mondayWork
function mondayWork(activityThree = "go to the office", _activityFour = "work from home") {
    if (mondayWork === activityThree) {
        return `This Monday, I will ${activityThree}.`;
    } else {
        return `This Monday, I will ${activityThree}.`;
    }
}
console.log(mondayWork(activityThree));


// Function called wrapAdjective that returns a function
function wrapAdjective(adjective) {
    return function(special) {
        let resultA = wrapAdjective('*')
        let emphaticA = resultA("a hard worker")
        return `You are ${emphaticA}!`;
    }
}

