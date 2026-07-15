/*Add your JavaScript here*/
var morningScore=0;
var nightScore=0;
var questionCount=0;
var restartButton=document.getElementById("restart");
//document object model=dom
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var result= document.getElementById("result");
q1a1.addEventListener("click", morning);
q1a2.addEventListener("click", night);
q2a1.addEventListener("click", morning);
q2a2.addEventListener("click", night);
q3a1.addEventListener("click", morning);
q3a2.addEventListener("click", night);
restartButton.addEventListener("click", restartQuiz);
function morning(){
  morningScore +=1;
  questionCount +=1;
  console.log("questionCount= "+questionCount +"morningScore= "+morningScore);
 if(questionCount == 3){
  console.log("The quiz is done!")
   finalResult();
}
    
}

function night(){
  nightScore +=1;
  questionCount +=1;
  console.log("questionCount= "+questionCount+"nightScore= "+nightScore);
  if(questionCount == 3){
    console.log("The quiz is done!")
    finalResult();
          
}
}

function finalResult(){
      if(morningScore>=2){
      console.log("You are a morning person");
      result.innerHTML="You are a morning person.";
        
      }else if(nightScore>=2){
        console.log("you are a night person");
        result.innerHTML="You are a night person.";
      }
}

function restartQuiz(){
        document.getElementById("result").innerHTML="Your result is...";
  questionCount=0;
  morningScore=0;
  nightScore=0;
  
}


