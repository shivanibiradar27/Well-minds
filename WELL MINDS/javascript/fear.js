var FearTest=[
    "Have you ever experienced an ‘attack’ of fear, anxiety, or panic?",
    "Do feelings of anxiety or discomfort around others bother you?",
    "Have you ever experienced a terrible occurrence that has impacted you significantly?",
    "Do you ever feel that you’ve been affected by feelings of edginess, anxiety, or nerves?",
    " Does worry or anxiety make it hard to concentrate?",
    "Does worry or anxiety interfere with falling and/or staying asleep?",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    "Do you worry about lots of different things? ",
    "Do you worry about things that have already happened in the past? ",
    "Do you ever feel to give such mental Health test",
    ""
]

var length = FearTest.length;

var currentQuestionIndex=-1;

function startGame(){
    currentQuestionIndex = -1;
    $(".start-btn").click(function(){
        $(this).toggleClass('hide');
        $("#question-container").removeClass('hide');
        $("#next-button").removeClass('hide');
    })
}
var score = 0;
var final_score = 0;

$("#next-button").click(function(){
    currentQuestionIndex++;
    $("#question").text(FearTest[currentQuestionIndex]);
    $("#question-count").text(`${currentQuestionIndex+1}/${FearTest.length}`);

    if(currentQuestionIndex==length-1){
        $("#next-button").addClass('hide');
        $("#result-button").removeClass('hide');
        $("#question-count").addClass('hide');

    }
    $(".btn").click(function(){
        score = parseInt($(this).attr('name'));
    })
    // if(score === NaN){
    //     score = 0;
    // }
    score = score ? score : 0;
    final_score+=score;
    console.log(final_score);
});
$("#result-button").click(function(){
    var Result = "";
    final_score = final_score/8;
    if(final_score <= 1){
        Result = "Your have severe Fear.😫";
    }
    if(final_score >1 && final_score <=2){
        Result = "You are in anxiety.😩";
    }
    if(final_score >2 && final_score <2.5){
        Result = "You are having Mild fear.😳";
    }
    if(final_score ==2.5){
        Result = "You are in the Middle.😬";
    }
    if(final_score >2.5 && final_score <=3){
        Result = "You are fine.😊";
    }
    if(final_score>3 && final_score<=4){
        Result = "Chill you are perfectly fine.😄";
    }
    $("#result").text(Result);
});

startGame();