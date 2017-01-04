var RobotThunderdome = RobotThunderdome || {};
RobotThunderdome.RobotComatant = {};

// Define Base Robot Combatan

RobotThunderdome.RobotCombatant.Player = function(name) {
    this.playerName = "Steve";

    this.health = null;
    this.type = null;
    this.attackName = null;
    this.damage = null;
    this.image = null;
    this.uniqueProperty = null;
}

// Define Robot Types

RobotThunderdome.RobotCombatant.Humanoid = function() {
    this.type = "Humanoid";
    this.model = null;
    this.uniqueProperty = {"Regenerate Health":
        function regenerateHealth(){
            this.health = this.health + 10;
        }
    }
}

RobotThunderdome.RobotCombatant.Humanoid.prototype = new RobotThunderdome.RobotCombatant.Player();

RobotThunderdome.RobotCombatant.Mechanical = function() {
    this.type = "Mechanical";
    this.model = null;
    this.uniqueProperty = {"Increased Durability":
        function addMaxHealth(){
            this.health = this.health + 50;
        }
    }
}

RobotThunderdome.RobotCombatant.Mechanical.prototype = new RobotThunderdome.RobotCombatant.Player();

RobotThunderdome.RobotCombatant.Dota2 = function() {
    this.type = "Dota2";
    this.model = null;
    this.uniqueProperty = {"Increased Damage":
        function addMaxDamage(){
            this.damage = this.damage + 10;
        }
    }
}

RobotThunderdome.RobotCombatant.Dota2.prototype = new RobotThunderdome.RobotCombatant.Player();

// Define Robot Type Models

RobotThunderdome.RobotCombatant.HumanoidModelWestWorld = function() {
    this.model = "Bernard Lowe";
    this.attackName = "Reprogram";
    this.damage = getEnemyRobotsDamage();
}

RobotThunderdome.RobotCombatant.HumanoidModelWestWorld.prototype = new RobotThunderdome.RobotCombatant.Humanoid();

RobotThunderdome.RobotCombatant.HumanoidModelTerminator = function() {
    this.model = "Terminator";
    this.attackName = "Shotgun";
    this.damage = getDamage(30, 40);
    this.health = getHealth(100, 200);
}

RobotThunderdome.RobotCombatant.HumanoidModelTerminator.prototype = new RobotThunderdome.RobotCombatant.Humanoid();


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
