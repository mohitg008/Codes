//gussing number game

var maximum = parseInt(prompt("Enter a valid maximum number"));

while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1; 
var guess= prompt("Enter your guess"); 

while(parseInt(guess) !== targetNum)
{
    if(guess === 'q')
    {
        console.log("You Quit the Game");
        break;
    }
    guess = parseInt(guess);
     if(guess > targetNum)
    {
        guess = prompt("Too high! enter a number again or 'q' to quit");
    }
     else if(guess < targetNum)
     {
        guess = prompt("Too low! enter a number again or 'q' to quit")
     }
     else{
        guess = prompt("Invalid number, Enter a number again");
     }
}

if(parseInt(guess) === targetNum)
{
    console.log("Congrats You WIN!");
}

