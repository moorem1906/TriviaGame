var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unAnswer = 0;

var question = 0;

var images;

var count=15;



var videoGameQuestion = [{
question: "In Mortal Kombat who sets at the top of the challenge board?",
choices: ["Raiden", "Shang Tsung", "Liu Kang", "Shao Khan" ],
images:  ["assets\images\ShaoKhan.jpg"],
validAnswer: 3
}, {
question:"Which player in Mortal Kombat animality involves turning into a dragon?",
choices: ["Sony Blade", "Jax", "Lu Kain", "Scorpion"],
validAnswer: 2

}, {
question:"Which charater is known of his hug metal arms and ironclad like punch?",
choices: ["Jax", "Kano", "Baraka", "Bi-Han"],
validAnswer: 0

}, {
question:"Which character is known for pulling her opponent's skin to the floor, leaving a bloody, skeletal husk?",
choices: ["Goro", "Kintaro", "Sheeva", "Sindel"],
validAnswer: 2

}, {
question:"I was the only secret character to possess an outright special ability: an absolute immunity to projectile attacks.?",
choices: ["Jade", "Princess Kitana", "Sony Blade", "Mileena"],
validAnswer: 1

 }, {
question:"I am ______. General to Shao Khan's Army?",
choices: ["Kotal Kahn", "Reiko", "Skarlet", "Ermac "],
validAnswer: 1

}, {
question:"This character is a bronze garbed ninja and a member of the Black Dragon clan who first appeared in Mortal Kombat: Special Forces?",
choices: ["Predator", "Blue", "Sub-zero", "Tremor"],
validAnswer: 3

}, {
question:"I am one of the original 'OGs' of Mortal Kombat. Most people will consider me a HollyWood Star. Who am I? ",
choices: ["Johnny Cage", "Kratos", "Quan Chi", "Shinnok "],
validAnswer: 0

}

];

function displayTrivia() {
    $("#questions").html(videoGameQuestion[0].question);
 question++;

};

  var choicesArr = videoGameQuestion[0].choices;
  var buttonsArr = [];

  for (var i = 0; i < choicesArr.length; i++) {
    var button = $('#btn' + i);
    button.text(choicesArr[i]);
    button.attr('data-id', i);
    $('.choices').append(button);
   }; 

  function timer(){
    count--;
    if (count <= 0) {
     clearInterval(counter);
     return;
    }

$("#timer").html("Time Remaining:" + " " + count + "secs");

}

$(".buttons").click(function(){
    $(this).hide();
  counter = setInterval(timer, 1000); 
  displayTrivia();
  }); 


 $('.choices').on('click', 'buttons', function(e){
 userPick = $(this).data("id");
 videoGameQuestion[0].validAnswer;
 if(userPick != videoGameQuestion[0].validAnswer) {


 $('.choices').text("Wrong Answer!");
 incorrectAnswer++;

} else if (userPick === videoGameQuestion[0].validAnswer) {
$('.choices').text("Correct!!!");
correctAnswer++;

}

 });  
