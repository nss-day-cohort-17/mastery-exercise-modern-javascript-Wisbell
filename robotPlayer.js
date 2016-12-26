var RobotWarrior = RobotWarrior || {};

RobotWarrior.RobotCombatants = {};


RobotWarrior.RobotCombatants.Player = function(name) {
    this.playerName = name;
    this.health = null;
    this.type = null;
    this.damage = null;
    this.attackName = null;
    this.image = null;
}


RobotWarrior.RobotCombatants.Player.prototype.generateType = function (){
    var random = Math.round(Math.random() * (this.allowedTypes.length -1))

    var randomType = this.allowedTypes[random];

    this.type = new RobotWarrior.RobotType[randomType]()
}

/*

humanoid -----------

Robot Ideas

westworld robots

Terminator

 Data (Star Trek: Th

Bishop, Aliens (1986)



cartoon robots -------

The Iron Giant

Wall-E

clockwork goblin - Dota 2


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
                has special attack name?
