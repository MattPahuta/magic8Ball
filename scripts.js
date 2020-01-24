$(document).ready(function() {
  
  var questionSide = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png';
  var answerSide = ' https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png';
  var magic8Ball = {};
  magic8Ball.answersArray = ['It is certain', 'Yes - Definitely', 'Nope', 'Most likely', 'Cannot predict now', 'My sources say no', 'Signs point to yes', 'Concentrate and ask again', 'Ask again later', 'Don\'t count on it', 'Very doubtful', 'As I see it, yes', 'Yeah, good luck with that'];

  // Hide answer upon page load
  $('#answer').hide();

  magic8Ball.answerQuestion = function(question){
    // var randomNumber = Math.random();
    // var randomNumberForListOfAnswers = randomNumber * this.answersArray.length;
    // var randomIndex = Math.floor(randomNumberForListOfAnswers);
    $('#answer').fadeIn(2000);
    // More succinct than above:
    var randomAnswer = Math.floor(Math.random() * this.answersArray.length);   
    var answer = this.answersArray[randomAnswer];
    // change to answer side image before showing the answer text
    $('#8ball').attr('src', answerSide);
    $('#answer').text(answer);
    // Debugging console.logs:
    // console.log(question);
    // console.log(answer);
  };

  // $('#answer').hide();

  setTimeout(function() {
    var onClick = function() {
      var question = prompt('Ask a Yes or No Question!');
      magic8Ball.answerQuestion(question);
      $('#8ball').effect('shake');
    };

    $('#questionButton').click(onClick);
    $('#8ball').attr('src', questionSide);
  }, 500);


});

