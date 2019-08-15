/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. 
The console.log() statements should still return what is expected of them.

prototype-refactor - Take existing code and make it modern.
You're going to work with your prototypes assignment you built out yesterday.
Challenge: Convert all of your constructors into ES6 Classes using the class 
and extends keywords. You should be able to run your same logs and they should 
build out the proper expected behaviors.

*/

/*
  Object oriented design is commonly used in video games.  
  For this part of the assignment you will be implementing several 
  constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: 
  GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
class GameObject {
    constructor (attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`
        }
    }
/*
function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    this.destroy = function destroy() {
      return `${this.name} was removed from the game.`
    }
  }
  */
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's 
  * size in the video game)
  * destroy() // prototype method that returns:
  *  `${this.name} was removed from the game.`
*/

class CharacterStats extends GameObject {
    constructor(csAttributes) {
        super(csAttributes);
        this.healthPoints = csAttributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
        }
}

/*
function CharacterStats(csattributes) {
  GameObject.call(this, csattributes);
  this.healthPoints = csattributes.healthPoints;
  this.takeDamage = function takeDamage() {
    return `${this.name} took damage.`;
  }
}
*/
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string
  *  '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class Humanoid extends CharacterStats {
    constructor(hAttributes) {
        super (hAttributes);
        this.team = hAttributes.team;
        this.weapons = hAttributes.weapons;
        this.language = hAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
        }
}
/*
function Humanoid(hattributes) {
  CharacterStats.call(this, hattributes);
  this.team = hattributes.team;
  this.weapons = hattributes.weapons;
  this.language = hattributes.language;
  this.greet = function greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
*/
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
