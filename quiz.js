/**
 * Created by itc_user on 6/16/2016.
 */


// section for inputting name
var testMyName = function(){
    var fname = document.getElementById("firstName").value;
    console.log("hello " + fname );
}



//question one JS code
var questionOne = function(){
    var allOfMyAnswers = document.getElementsByName("proximity");
    for(var i=0; i < allOfMyAnswers.length ; i++){
        var currentAnswer = allOfMyAnswers[i];
        if (currentAnswer.checked){
            return parseInt(currentAnswer);
        }
    }
}
var AnswerOne= questionOne();



//question two JS code

var questionTwo = function(){
    var checkedoff = 0;
    var questtwo = document.getElementsByName("solarS");
        for(var i=0; i < questtwo.length ; i++){
            var boxStatus = questtwo[i];
            if (boxStatus.checked){
                checkedoff += 1;
            } console.log(checkedoff)
        } return checkedoff;
console.log(checkedoff)
}
var AnswerTwo=questionTwo();


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
var AnswerThree = questionThree();


//question four JS code

var questionFour = function(){
    var questfour = document.getElementsByName("points");
    questfour = parseInt(questfour);
    return questfour;
}
var AnswerFour = questionFour();

//question five for JS code

var questionFive = function(){
    var questfive= document.getElementById("quest5.value");
    if(questfive === "jupiter"){
        return 1;
    }
    else{
        return 0;

    }
 var AnswerFive = questionFive();
}


var pointAggregator = function(){
var usersPoints = AnswerOne+ AnswerTwo + AnswerThree + AnswerFour + AnswerFive ;
console.log(usersPoints);
}