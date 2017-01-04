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
      // case "card--class":
      //   moveAlong = ($("#player-name").val() !== "");
      //   break;
      // case "card--weapon":
      //   moveAlong = ($("#player-name").val() !== "");
      //   break;
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

      switch (selectedPlayerRobot) {
        case "Humanoid: Bernard Lowe":
          playerRobot = new Thunderdome.Robots.HumanoidModelWestWorld($("#player-name").val());
          console.log(playerRobot)
          break;
        case "Humanoid: Terminator":
          playerRobot = new Thunderdome.Robots.HumanoidModelTerminator($("#player-name").val());
          break;
        case "Mechanical: Johnny 5":
          playerRobot = "test2";
          break;
        case "Mechanical: R2D2":
          playerRobot = "test2";
          break;
        case "Dota2: Tinker":
          playerRobot = "test2";
          break;
        case "Dota2: Clockwerk Goblin":
          playerRobot = "test2";
          break;
      }

      // Create instance for selected enemy robot
    }

  })

});
