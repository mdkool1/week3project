//1
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1a
console.log(ages[ages.length - 1] - ages[0]);
//1b
ages.push(37);
console.log(ages);
console.log(ages[ages.length -1] - ages[0]);

let total = 0
for(var i = 0; i< ages.length; i++) {
    total += ages[i];
}
let average = total/ages.length;
console.log(average);
//2
let names = ["Sam", "Tommy","Tim", "Sally", "Buck", "Bob"]
console.log(names);
//2a
var totalLetters = 0
for(var i = 0; i<names.length; i++){
    totalLetters += names[i].length;
}
var averageNames = totalLetters/names.length;
console.log(averageNames);
//2b
let result = " ";
for(var i = 0; i < names.length; i++){
    result = result.concat(names[i] + " ");
}
console.log(result);
//5
let nameLengths = [];
for (var i = 0; i <names.lengths; i++){
    nameLengths[i] = names[i].length;
}
//6
sum = 0;
for (var i = 0; i < nameLengths.length; i ++){
    sum = sum + nameLenghts[i];
}
console.log(sum);
//7
function repeatWordNTimes(word, n){
    let con = word;
    for (var i = 1; i <= n; i++){
        con = con.concat(word);
    } return con;
}
console.log(repeatWordNTimes("Hello", 2));
//8
function fullName(firstname, lastName){
    return firstname.concat(" ", lastName);
}
console.log("Mario" + " " + "Duarte")
//9
function totalNumberGreaterThan (arr){
    sum = 50+50;
    for (var i = 0; i < arr.length; i++){
        sum = sum += arr[i];
    } if (sum === 100){
     console.log( "validation passed");
     return true;
    } else {
        console.log("validation failed");
        return false;
    }
}
console.log(totalNumberGreaterThan(50+50));
//10
function averageArr(myArray){
    var i = 0, sum = 0, arrayLen = myArray.length;
    while (i < arrayLen){
        sum = sum + myArray[i++];
    }
    return sum / arrayLen;
}
var myArray = [4, 91, 22, 13, 6, 19];
var x = averageArr(myArray);
console.log(x);
//11
function compareTheAverage (currentArrayOne, currentArrayTwo){
    var totalOfOne = 0;
    for (var i = 0; i< currentArrayOne.length; i++) {
        totalOfOne += currentArrayOne[i];
    }
    var totalOfTwo = 0;
    for (var i = 0; i < currentArrayTwo.legth; i++){
        totalOfTwo += currentArrayTwo[i];
    }
    var averageOne = totalOfOne / currentArrayOne.length;
    var averageTwo = totalOfTwo / currentArrayTwo.length;
    if (averageOne > averageTwo) {
        return true;
    }
    else {
        return false;
    }
}
var x = compareTheAverage([4, 91, 22, 13, 6, 19],[2, 7, 3, 26]);
console.log(x);

//12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        console.log("Yes, I will have a drink.");
    } else {
        console.log("No, I can't have a drink.");
    }
}
console.log(willBuyDrink(true, 10.50));

//13 
function zeroToTen(){
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}
zeroToTen();