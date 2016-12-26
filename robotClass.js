var RobotWarrior = RobotWarrior || {};

RobotWarrior.RoboLab = {};


RobotWarrior.RoboLab.PlayerType = function() {
    this.typeName;
    this.healthBonus;
    this.attackBonus;
}

/*

HUMANOID - Movies/shows

regenerates helath every turn?

Terminator - shotgun

 Data (Star Trek: Th - phaser gun

Bernard Lowe - reprogram attack



Games?

cait sith - ff7

clockwork goblin - Dota 2

probe starcraft 2  cannon rush


MECHANICAL - Movies

johnny-5, Short Circuit (1986)


r2d2

Chappie
*/

RobotWarrior.RoboLab.Humanoid = function() {
    this.regenBonus = 5;
}

RobotWarrior.RoboLab.Humanoid.prototype = new RobotWarrior.RoboLab.PlayerType ();
