// Global Variables

var namesChosen = false;
var robotsChosen = false;

var playerRobot;
var enemyRobot;


// When document is ready
$(document).ready(function(){

    var playerName = $("#player-name").val();
    var EnemyName = $("#enemy-name").val();

    /*
    Show the initial view that accepts player name
   */
    $('#robot-setup-section').show()
    $('#thunderdome-section').hide()


    // Add event listener to go to battledome button

    $('.beginBattle').click(function(){
        console.log("battledome button clicked")

        // check if players chose name
        namesChosen = checkPlayerNames()

        // check if players chose robots
        robotsChosen = checkPlayerRobots()

        // if both true make selected robot instances
        if(namesChosen && robotsChosen){
            // add player robot information to thunderdome player div

            // add enemy robot information to thunderome enemy div

            // show thunder dome

            $('#robot-setup-section').hide()
            $('#thunderdome-section').show()
        }

        // add player robot information to thunderdome player div

        // add enemy robot information to thunderome enemy div

        // show thunder dome
    })

})

// Check if bother players chose names
function checkPlayerNames(){
    if ($("#player-name").val() !== '' && $('#enemy-name').val() !== ''){
        console.log("checkplayerName is true")
        return  true
    } else {
        console.log("checkplayerName is false")
        return false
    }
}

// check if both players chose robots
function checkPlayerRobots() {
    var robot1 = $('.robot__player-robot-choice').find(":selected").text();
    var robot2 = $('.robot__enemy-robot-choice').find(":selected").text();
    var choiceText = 'Choose a Robot'

    if (robot1 !== choiceText && robot2 !== choiceText) {
        console.log("check player robot is true")
        return true;
    } else {
        console.log("checkplayer robot is false")
        return false;
    }
}



function createRobot(selectedRobot, name) {
  console.log("createRobot function called")

  switch (selectedRobot) {
    case "Bernard Lowe":
      return new Thunderdome.Robots.HumanoidModelWestWorld(name);
    case "Terminator":
      return new Thunderdome.Robots.HumanoidModelTerminator(name);
    case "Johnny 5":
      return new Thunderdome.Robots.MechanicalModelJohnny5(name);
    case "R2D2":
      return new Thunderdome.Robots.MechanicalModelR2D2(name);
    case "Tinker":
      return new Thunderdome.Robots.Dota2ModelTinker(name);
    case "Clockwerk":
      return new Thunderdome.Robots.Dota2ModelClockwerk(name);
  }
}
