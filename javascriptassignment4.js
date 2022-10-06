let x=Math.floor(Math.random() *3)+1
let playerinput=prompt("Choose rock,paper or scissors")
console.log(playerinput)

switch(playerinput){
case 'rock':
    console.log("I am in rock");
    console.log(x)
        switch(x){
        case 1:
            console.log("Draw");
            break;
        case 2:
            console.log("Computer wins");
            break;
        case 3:
            console.log("Player wins");
        }
        break;
case 'paper':
        switch(x){
            case 1:
                console.log("Player wins");
                break;
            case 2:
                console.log("Draw");
                break;
            case 3:
                console.log("Computer wins");
        }
        break;
case 'scissors':
        switch(x){
            case 1:
                console.log("Copmputer wins");
                break;
            case 2:
                console.log("Player wins");
                break;
            case 3:
                console.log("Draw");
        }
        break;
default:
        console.log("Unlucky");
    }
