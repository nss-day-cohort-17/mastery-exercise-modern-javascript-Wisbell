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

// Add event listener on robot selection to show appropiate robot descriptions
$('.robot__player-robot-choice').change(function(){
    console.log("player changed chosen robot")

    var playerRobotChoice = $('.robot__player-robot-choice').find(":selected").text();

    changeRobotDescriptionAndImage("player", playerRobotChoice)
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



// Change robot description

function changeRobotDescriptionAndImage(playerOrEnemyDescription, robotChoice ){

    // check if player robot description or enemy robot description will be changed
    console.log(playerOrEnemyDescription)
    console.log(robotChoice)

    if (robotChoice === "Bernard Lowe") {
        console.log("bernard lowe is true")
    }

    if (playerOrEnemyDescription === "player") {
        // clear player robot description div and image div
        $(".robot__player-robot-description").empty()
        $(".robot__player-robot-image").empty()

        console.log("truee", robotChoice)

        switch (robotChoice) {
            case "Bernard Lowe":
              // Add picture
              $('.robot__player-robot-image').html('<img src="images/bernard for character thread_zpsw3i8zrug.jpg" class="robot__image"/>')
              // Add description
              $('.robot__player-robot-description').html(`<p>Description</p>
                                                        <p>Bernard Lowe is a robot who excels in re-programming other robots.</p>`)
              break;
            case "Terminator":
              // Add picture
              $('.robot__player-robot-image').html('<img src="images/166404_006.jpg" class="robot__image"/>')
              // Add description
              $('.robot__player-robot-description').html(`<p>Description</p>
                                                        <p>Terminator is a robot made by machines who will always be back.</p>`)
              break;
            case "Johnny 5":
              // Add picture
              $('.robot__player-robot-image').html('<img src="images/4006740-9829399991-Numbe.jpg" class="robot__image"/>')
              // Add description
              $('.robot__player-robot-description').html(`<p>Description</p>
                                                        <p>Johnny 5 is a robot that was struck by lightning and gained sentience</p>`)
              break;
            case "R2D2":
              // Add picture
              $('.robot__player-robot-image').html('<img src="images/r2d2-625x350.jpg" class="robot__image"/>')
              // Add description
              $('.robot__player-robot-description').html(`<p>Description</p>
                                                        <p>R2D2 is an older robot who started off fighting in spaceships and will never stop helping his friends</p>`)
              break;
            case "Tinker":
              // Add picture
              $('.robot__player-robot-image').html('<img src="images/bernard for character thread_zpsw3i8zrug.jpg" class="robot__image"/>')
              // Add description
              $('.robot__player-robot-description').html(`<p>Description</p>
                                                        <p>Tinker is a robot who excels in rocketry and lasers</p>`)
              break;
            case "Clockwerk":
              // Add picture
              $('.robot__player-robot-image').html('<img src="images/bernard for character thread_zpsw3i8zrug.jpg" class="robot__image"/>')
              // Add description
              $('.robot__player-robot-description').html(`<p>Description</p>
                                                        <p>Clockwerk Goblin is a robot who is an expert in close combat</p>`)
              break;
            default:
              // show default robot/description

              // Add picture
              $('.robot__player-robot-image').html('<img src="images/stupid_robot.png" class="robot__image"/>')
              // Add description
              $('.robot__player-robot-description').html(`<p>Description</p>
                                                        <p>Hi, please selected a robot from the above select menu.</p>`)
        }

    } else if (playerOrEnemyDescription === "enemy"){
        // clear enemy robot description div
        $(".robot__enemy-robot-description").empty()
    }
}
