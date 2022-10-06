let a=prompt("Did you do higher or ordinary")
let b=prompt("Enter your grade Eg. H1 or O1")

switch(a){
case 'higher':
    switch(b){
    case 'H1':
        console.log("You got 100 points");
        break;
    case 'H2':
        console.log("You got 100 points");
        break;
    case 'H3':
        console.log("You got 100 points");
        break;
    case 'H4':
        console.log("You got 100 points");
        break;
    case 'H5':
        console.log("You got 100 points");
        break;
    case 'H6':
        console.log("You got 100 points");
        break;
    case 'H7':
        console.log("You got 100 points");
        break;
    case 'H8':
        console.log("You got 100 points");
        break;
    default:
        console.log("Grade not recognised");
        break;
    }
}
//Just need tochange the numbers for the points in the higher level switch and do the ordinary level switch