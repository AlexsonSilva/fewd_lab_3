function greet(){
    return 'Haydo!';
}
var salutation = greet();
console.log(salutation);

function echo(sound){
    return sound;
}

function greet2(name){
    return 'Hello ' + name + '!';
}
greet2 = ('Alexson');
console.log(greet2);

function shout(string) {
    return console.log(string + string);
}
shout('Fire');

function doSomething(name){
    return console.log(name);
}
doSomething('Leks');

function multiplyFive(number){
    return console.log(number * 5);
}
multiplyFive(5);

/*function myFunction(){
    alert("Hello World!")
}
myFunction();*/

var isAnswerRight = true;
isAnswerRight ? console.log('The answer is right!') : console.log('The answer is wrong!');

function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle){
    return console.log('You will be a ' + jobTitle + ' in ' + geographicLocation + 
    ',and married to ' + partnerName + ' with ' + numberOfChildren + ' kids.');
}
tellFortune(1, 'Eric', 'Dublin', 'Software Engineer');
tellFortune(2, 'Mary', 'Cork', 'Developer');
tellFortune(3, 'Rose', 'Galway', 'Designer');
