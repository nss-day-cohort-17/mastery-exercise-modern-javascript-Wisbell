 // From MDN Docs ---->
  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!

  function getDamage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   function getHealth(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




var Thunderdome = Thunderdome || {};
Thunderdome.Robots = {};

// Define Base Robot Combatan

Thunderdome.Robots.Player = function(name) {
    this.playerName = name; //|| "Unknown Robot";

    this.health = null;
    this.type = null;
    this.attackName = null;
    this.damage = null;
    this.image = null;
    this.uniqueProperty = null;
}

// Define Robot Types

Thunderdome.Robots.Humanoid = function() {
    this.type = "Humanoid";
    this.model = null;
    this.uniqueProperty = {"Regenerate Health":
        function regenerateHealth(){
            this.health = this.health + 10;
        }
    }
}

Thunderdome.Robots.Humanoid.prototype = new Thunderdome.Robots.Player();

Thunderdome.Robots.Mechanical = function() {
    this.type = "Mechanical";
    this.model = null;
    this.uniqueProperty = {"Increased Durability":
        function addMaxHealth(){
            this.health = this.health + 50;
        }
    }
}

Thunderdome.Robots.Mechanical.prototype = new Thunderdome.Robots.Player();

Thunderdome.Robots.Dota2 = function() {
    this.type = "Dota2";
    this.model = null;
    this.uniqueProperty = {"Increased Damage":
        function addMaxDamage(){
            this.damage = this.damage + 10;
        }
    }
}

Thunderdome.Robots.Dota2.prototype = new Thunderdome.Robots.Player();

// Define Robot Type Models

Thunderdome.Robots.HumanoidModelWestWorld = function() {
    this.model = "Bernard Lowe";
    this.attackName = "Reprogram";
    this.damage = getDamage(20, 30);; //getEnemyRobotsDamage();
    this.health = getHealth(100, 150);
}

Thunderdome.Robots.HumanoidModelWestWorld.prototype = new Thunderdome.Robots.Humanoid();

Thunderdome.Robots.HumanoidModelTerminator = function() {
    this.model = "Terminator";
    this.attackName = "Shotgun";
    this.damage = getDamage(30, 40);
    this.health = getHealth(100, 200);
}

Thunderdome.Robots.HumanoidModelTerminator.prototype = new Thunderdome.Robots.Humanoid();


/*

humanoid -----------

Robot Ideas

westworld robots  - bernard  CHOOSE THIS AS ONE OF TWO

Terminator - CHOOSE THIS AS ONE OF TWO





cartoon robots -------

The Iron Giant  - CHOOSE THIS AS ONE OF TWO

clockwork goblin - Dota 2   - CHOOSE THIS AS ONE OF TWO


mechanical-------

  Johnny-5, Short Circuit (1986)

r2d2

Chappie
*/

/*
Robot game

    has a player


    player

        has a default image palceholder
        has a class/type
        has a name
        has health


        type

            has 3 models
            has a default image
            has unique property

            model

                has damage
                has special attack
*/
