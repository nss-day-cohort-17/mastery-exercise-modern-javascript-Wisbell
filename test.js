// Global Variables

var namesChosen = false;
var robotsChosen = false;

var playerRobot;
var enemyRobot;


// When document is ready
$(document).ready(function(){

    /*
    Show the initial view that accepts player name
   */
    $('robot-setup-section').show()
    $('thunderdome-section').hide()


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

            $('player-setup').hide()
            $('thunderdome-section').show()
        }

        // add player robot information to thunderdome player div

        // add enemy robot information to thunderome enemy div

        // show thunder dome
    })

})

// Check if bother players chose names
function checkPlayerNames(){
    if ($("#player-name").val() !== '' && $('#enemy-name').val() !== ''){
        return  true
    } else {
        return false
    }
}

// check if both players chose robots
function checkPlayerRobots() {
    var robot1 = $('.player-robot')
    var robot2 = $('.enemy-robot')

    console.log("robot1", robot1)
    console.log("robot2", robot2)

    // if () {

    // }
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
