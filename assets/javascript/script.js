var enemySelected;
var characterSelected;
var isEnemySelected = false;
var isCharacterSelected =false;
var isGameover = false;
var hasUserLost = false;
var surivor = {
	name: "surivor",
	healthPoints: 120,
	// baseAttackPower: 8,
	counterAttackPower: 10,
	attackPower: 8
};

var ghoul = {
	name: "ghoul",
	healthPoints: 100,
	// baseAttackPower: 10,
	counterAttackPower: 15,
	attackPower: 10
};

var deathclaw = {
	name: "deathclaw",
	healthPoints: 150,
	// baseAttackPower: 12,
	counterAttackPower: 16,
	attackPower: 12
};

var mutant = {
	name: "mutant",
	healthPoints: 180,
	// baseAttackPower: 8,
	counterAttackPower: 20,
	attackPower: 8
}; 

var enemies = [ ];
var defeated = [ ];
var characers = [surivor, ghoul, deathclaw, mutant];

$ (document).ready(function() {
  
  // 1a. User will pick a character
  // 1b. The character will be move to the chosen character section
  // 1c. Other remaining character will be move to the enemy section
  // 2. User will pick an enemy
  // 3. when the character attack the user, their health will decrease and user attack will increase
  // 4. The attack function will repeat until the enemy is death and then will loop back to choosing a new enemy
  // 5. Check to see if user lost 
  // 6. Check to see if the enemy lost and user defeate all enemies




});

