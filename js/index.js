// JavaScript File


function getAge(age) {
if (age < 18) { 
    return 'Young'
} else {
    return 'Adult'
}    
}

var myAge = Number(prompt('Enter your name'));
alert(getAge(myAge));