Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

var count = 1;
while (count >= 1 && count <= 5) {
    console.log(count);
    count++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

var count = 1;
do {
    console.log(count);
    count++;
} while (count >= 1 && count <= 5);


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (var count = 1; count <= 5; count++) {
    console.log(count)
}

// Exercise 4. Now we want a loop that prints the integers 
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

var count = 10;
while (count <= 10 && count >= 1) {
    console.log(count);
    count--;
}

var count = 10;
do {
    console.log(count);
    count--;
} while (count <= 10 && count >= 1);

for (var count = 10; count > 0; count--) {
    console.log(count)
}


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this 
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

var count = 7;
while (count >= 7 && count <= 27) {
    console.log(count);
    count++;
}

var count = 7;
do {
    console.log(count);
    count++;
} while (count >= 7 && count <= 27);

for (var count = 7; count <= 27; count++) {
    console.log(count)
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.var count = 1;

var count = 0;
while (count >= 0 && count <= 100) {
    console.log(count);
    count += 10;
}

var count = 0;
do {
    console.log(count);
    count += 10;
} while (count >= 0 && count <= 100);

for (var count = 0; count <= 100; count += 10) {
    console.log(count)
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will 
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
//every number returned will be lesser than 2. it needs a floor to hit
//i tested it by replacing ('HELP ME!') with (counterFour), and the loop stopped at -100
while (counterFour < 2 && counterFour > -101) {
    console.log('HELP ME!')
    counterFour--;
}


// Exercise 8. Make a variable that contains your favorite integer. Write a loop 
// (your choice which type) that prints the integers from 0 to that number.

var count = 0
var fav = 13;
while (count <= fav) {
    console.log(count)
    count++;
}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's 
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

var fav = 13;
var count = 0;
while (count >= 0 && count <= 99) {
    count++;
    if (count === fav) {
        console.log(count + " my favorite number!");
    } else {
        console.log(count + " not my favorite number");
    }

}


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or 
// doing some research and write down your thoughts in a comment below:
//

//the "while" loop... this isn't technical or anything, i just like it. it's very simple and easy to read.
//the "do while" loop is especially suited for things like prompts, where you want to execute the loop even before testing the condition.
//the "for" loop is generally the fastest/smallest way to write a loop.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
    console.log("counting down from", outsideCounter);
    for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
        console.log("inside", insideCounter);
    }
    console.log("***********************************")
}


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
//
//this one was pretty easy with the treehouse videos as a guide!
//

// Email your file to us or commit your file to GitHub and email us a link.
