x= prompt("Hello, what is your name?");
var guest = ["Randy","Rae"]; 
function name(){
    if (guest.includes(x)===true){
        alert("welcome to my website!")
    }else{
        alert("Sorry, you are not allowed to access this website.")
    }
}

name();

