// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if(this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
  
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if(this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {

  vikingArmy = [];
  saxonArmy = [];
  
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randomS = Math.floor(Math.random() * this.saxonArmy.length);
    let randomV = Math.floor(Math.random() * this.vikingArmy.length);
    const attackResult =  this.saxonArmy[randomS].receiveDamage(this.vikingArmy[randomV].attack());

    if(this.saxonArmy[randomS].health <= 0)
    {
      this.saxonArmy.splice(randomS, 1);
    }

    return attackResult;
  }

  saxonAttack() {
    const randomS = Math.floor(Math.random() * this.saxonArmy.length);
    const randomV = Math.floor(Math.random() * this.vikingArmy.length);
    const attackResult =  this.vikingArmy[randomV].receiveDamage(this.saxonArmy[randomS].attack());

    if(this.vikingArmy[randomV].health <= 0)
    {
      this.vikingArmy.splice(randomV, 1);
    }

    return attackResult;
  }

  showStatus() {
    if(this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }

    if(this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }

    if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
