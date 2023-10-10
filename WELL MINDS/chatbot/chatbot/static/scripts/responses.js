function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "bad") {
        return "Tell me more";
    }
    else if (input=="feeling low"){
        return "Do some exercise,got out and walk,you will feel better!"

    } 
    else if (input=="good"){
        return "That's great!Good to hear."
    }
     else {
        return "How do you feel today?!";
    }
}