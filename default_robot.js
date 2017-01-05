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
// Move above to Different file?


/**********************************************/
/***     Create Thunderdome Game Object     ***/
/**********************************************/

var Thunderdome = Thunderdome || {};

/******************************************/
/***     Create Empty Robots Object     ***/
/******************************************/

Thunderdome.Robots = {};

/************************************/
/***     Define Base Robot        ***/
/************************************/

Thunderdome.Robots.Player = function(name) {
    this.playerName = name
    this.health = null;
    this.attackName = null;
    this.damage = null;
    this.image = null;
}

/************************************/
/***     Define Robot Types       ***/
/************************************/

// Humanoid Type
Thunderdome.Robots.Humanoid = function() {
    this.type = "Humanoid";
    this.model = null;
    this.uniqueProperty = {"Regenerate Health":
        function regenerateHealth(){
            this.health = this.health + 10;
        }
    }
}

Thunderdome.Robots.Humanoid.prototype = new Thunderdome.Robots.Player()

// Mechanical Type
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

// Dota2 Type
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

/*******************************/
/***  Define Robot Models    ***/
/*******************************/

// Humanoid Models
Thunderdome.Robots.HumanoidModelWestWorld = function(name) {
    Thunderdome.Robots.Player.call(this, name)
    this.model = "Bernard Lowe";
    this.attackName = "Reprogram";
    this.damage = getDamage(20, 30); //getEnemyRobotsDamage();
    this.health = getHealth(100, 150);
}

Thunderdome.Robots.HumanoidModelWestWorld.prototype = new Thunderdome.Robots.Humanoid();

Thunderdome.Robots.HumanoidModelTerminator = function(name) {
    Thunderdome.Robots.Player.call(this, name)
    this.model = "Terminator";
    this.attackName = "Shotgun";
    this.damage = getDamage(30, 40);
    this.health = getHealth(100, 200);
}

Thunderdome.Robots.HumanoidModelTerminator.prototype = new Thunderdome.Robots.Humanoid();


// Mechanical Models
Thunderdome.Robots.MechanicalModelR2D2 = function(name) {
    Thunderdome.Robots.Player.call(this, name)
    this.model = "R2D2";
    this.attackName = "Shock";
    this.damage = getDamage(20, 30)
    this.health = getHealth(100, 150);
}

Thunderdome.Robots.MechanicalModelR2D2.prototype = new Thunderdome.Robots.Mechanical();

Thunderdome.Robots.MechanicalModelJohnny5 = function(name) {
    Thunderdome.Robots.Player.call(this, name)
    this.model = "Johnny-5";
    this.attackName = "Slam";
    this.damage = getDamage(30, 40);
    this.health = getHealth(100, 200);
}

Thunderdome.Robots.MechanicalModelJohnny5.prototype = new Thunderdome.Robots.Mechanical();


// Dota 2 Models
Thunderdome.Robots.Dota2ModelClockwerk = function(name) {
    Thunderdome.Robots.Player.call(this, name)
    this.model = "Clockwerk";
    this.attackName = "Hook Shot";
    this.damage = getDamage(20, 30);
    this.health = getHealth(100, 150);
}

Thunderdome.Robots.Dota2ModelClockwerk.prototype = new Thunderdome.Robots.Dota2();

Thunderdome.Robots.Dota2ModelTinker = function(name) {
    Thunderdome.Robots.Player.call(this, name)
    this.model = "Tinker";
    this.attackName = "Heat Seeking Missle";
    this.damage = getDamage(30, 40);
    this.health = getHealth(100, 200);
}

Thunderdome.Robots.Dota2ModelTinker.prototype = new Thunderdome.Robots.Dota2();



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
