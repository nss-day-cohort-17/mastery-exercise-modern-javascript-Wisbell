var RobotThunderdome = RobotThunderdome || {};


RobotThunderdome.RobotCombatant.Player = function(name) {
    this.playerName = name;

    this.health = 50;
    this.type = null;
    this.damage = null;
    this.image = null;
}


RobotThunderdome.RobotCombatant.Player.prototype.generateType = function (){
    var random = Math.round(Math.random() * (this.allowedTypes.length -1))

    var randomType = this.allowedTypes[random];

    this.type = new RobotThunderdome.RobotType[randomType]()
}

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
