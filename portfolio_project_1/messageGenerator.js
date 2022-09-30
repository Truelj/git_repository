/*
Project Objectives:
Build a message generator program using JavaScript
Use Git version control
Use command line
Develop locally on your computer
 */

/*
Every time a user runs a program, they should get a new, randomized output.
*/

function msgGenerator(){
    let data3 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let data1 = [1,2,3,4,5,6,7,8,8,10,11,12];
    let data2 = ['morning', 'afternoon'];
    
    let message = "";
    message = "Hello! It's " + data1[Math.floor(Math.random() * (data1.length - 1))] + " O'clock "
                    + "in the " + data2[Math.floor(Math.random() * (data2.length))] + " "
                    + "on " + data3[Math.floor(Math.random() * (data3.length - 1))] + "!";

    return message; 
}

console.log(msgGenerator());