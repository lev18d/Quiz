/**
 * Created by itc_user on 6/16/2016.
 */


// section for inputting name
var testMyName = function(){
    var fname = document.getElementById("firstName").value;
    return fname;
}



//question one JS code
var questionOne = function(){
    var allOfMyAnswers = document.getElementsByName("proximity");
    for(var i=0; i < allOfMyAnswers.length ; i++){
        var currentAnswer = allOfMyAnswers[i];
        if (currentAnswer.checked){
            return parseInt(currentAnswer.value);
        }
    }
}


//question two JS code

var questionTwo = function(){
    var checkedoff = 0;
    var questtwo = document.getElementsByName("solarS");
        for(var i=0; i < questtwo.length ; i++){
            var boxStatus = questtwo[i];
            if (boxStatus.checked){
                checkedoff += 1;
            }
        }
    return checkedoff;
}


//question three JS code

var questionThree = function () {
    var questthree = document.getElementById("starryNight");
    questthree = parseInt(questthree.value);
    if(questthree === 6){
        return 1;
    }
    else{
        return 0;
    }
}


//question four JS code

var questionFour = function(){
    var questfour = document.getElementById("points");
    questfour = parseInt(questfour.value);
    return questfour;
}

//question five for JS code

var questionFive = function(){
    var questfive= document.getElementById("quest5").value;
    if(questfive === "jupiter"){
        return 1;
    }
    else{
        return 0;

    }
}




var pointAggregator = function(){
    var AnswerOne= questionOne();
    var AnswerTwo=questionTwo();
    var AnswerThree = questionThree();
    var AnswerFour = questionFour();
    var AnswerFive = questionFive();

    var usersPoints = AnswerOne + AnswerTwo + AnswerThree + AnswerFour + AnswerFive ;
// var userStatus = " "
    if(usersPoints === 17){
        var userStatus = " Rocket scientist ";
    }
    else if(usersPoints <= 10 && usersPoints>5){
        userStatus = "cosmonaut";
    }
    else if(usersPoints<=5){
        userStatus = "person who should look up more often";
    }
    console.log(testMyName() + " you got a score of " + usersPoints + " making you a " + userStatus);
}




// var tester = function(){
//     var AnswerOne= questionOne();
//     var AnswerTwo=questionTwo();
//     var AnswerThree = questionThree();
//     var AnswerFour = questionFour();
//     var AnswerFive = questionFive();
//     console.log(AnswerOne);
//     console.log(AnswerTwo);
//     console.log(AnswerThree);
//     console.log(AnswerFour);
//     console.log(AnswerFive);
// }