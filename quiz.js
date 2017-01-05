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

      var selectedPlayerRobot = $(".player-robot").val();
      console.log("selected player robot", selectedPlayerRobot);

      // Create instance for selected player robot

      playerRobot = createRobot(selectedPlayerRobot)
      console.log(playerRobot)

      // Create instance for selected enemy robot

      enemyRobot = createRobot(selectedPlayerRobot)
      console.log(enemyRobot)
    }

  })

});


function createRobot(selectedPlayerRobot) {
  console.log("createRobot function called")

  switch (selectedPlayerRobot) {
    case "Bernard Lowe":
      return new Thunderdome.Robots.HumanoidModelWestWorld($("#player-name").val());
    case "Terminator":
      return new Thunderdome.Robots.HumanoidModelTerminator($("#player-name").val());
    case "Johnny 5":
      return new Thunderdome.Robots.MechanicalModelJohnny5($("#player-name").val());
    case "R2D2":
      return new Thunderdome.Robots.MechanicalModelR2D2($("#player-name").val());
    case "Tinker":
      return new Thunderdome.Robots.Dota2ModelTinker($("#player-name").val());
    case "Clockwerk":
      return new Thunderdome.Robots.Dota2ModelClockwerk($("#player-name").val());
  }
}
