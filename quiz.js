// /*
//   Test code to generate a human player and an orc player
//  */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

// /*
//   Test code to generate a spell
//  */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

var testRobot = new Thunderdome.Robots.HumanoidModelTerminator("Termie");
var playerRobot;
var enemyRobot;



/* Animation library? https://daneden.github.io/animate.css/ */

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "" && $('#enemy-name').val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });



  // Add Event listener to Scrap Some Metal Button
  $('.beginBattle').click(function () {
    console.log("Scrap Some Metal button clicked");

    if($("#player-name").val() !== "" && $('#enemy-name').val() !== "") {
      console.log("Both inputs have names");

      console.log("test", $('#player-setup'))

      $('#robot-setup-section').hide()
      $('#thunderdome-section').show()

      // Store select of player and enemy names
      var playerRobotName = $("#player-name").val();
      var enemyRobotName = $("#enemy-name").val();

      // Store selected robot for player and enmey
      var selectedPlayerRobot = $(".player-robot").val();
      var selectedEnemyRobot = $(".enemy-robot").val();

      // Create instance for selected player robot
      playerRobot = createRobot(selectedPlayerRobot, playerRobotName)
      console.log(playerRobot)

      // Create instance for selected enemy robot
      enemyRobot = createRobot(selectedEnemyRobot, enemyRobotName)
      console.log(enemyRobot)

      // Add player's Robot Information
      //addPlayerInfoToBattle();

      // Add enemy's Robot Information
      //addEnemyInfoToBattle();
    }

  })

});


// Add event listener to player robot selection


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


function addPlayerInfoToBattle(){
  // Add player name
  $(".playerRobotName").append(playerRobot.playerName)

  // Add player image
  $(".playerRobotImage").append(`<img src=${playerRobot.image}>`)
}

function addEnemyInfoToBattle(){
  // Add enemy name
  $(".enemyRobotName").append(enemyRobot.playerName)

  // Add enemy image
  $(".enemyRobotImage").append(`<img src=${enemyRobot.image}>`)
}
