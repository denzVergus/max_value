/*Implement a program that takes 3 form inputs or from the terminal, and stores them in three variables. Return the largest of the three. Do this without using the inbuilt max () function!
The goal of this exercise is to think about some internals that programs normally take care of for us. 
Extras:
If the number is a multiple of 4, display out a different message.

*/
let num1, num2, num3;

num1 = parseInt(prompt("Enter a number"))
num2 = parseInt(prompt("Enter a number"))
num3 = parseInt(prompt("Enter a number"))
let maxValue;

if (num1 >= num2 && num1 > num3){
    maxValue = num1
}
elseif (num2 > num1 && num2 > num3);{
    maxValue = num2
}
elseif (num3 > mum1 && num3 >num2);{
    maxValue = num3
}