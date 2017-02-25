
var isGameover = false;
var hasUserLost;

var characterSelected;
var enemySelected;


var survivor = {
	name: "survivor",
	healthPoints: 120,
	baseAttackPower: 8,
	counterAttackPower: 10,
	attackPower: 8
};

var ghoul = {
	name: "ghoul",
	healthPoints: 100,
	baseAttackPower: 10,
	counterAttackPower: 15,
	attackPower: 10
};

var deathclaw = {
	name: "deathclaw",
	healthPoints: 150,
	baseAttackPower:  12,
	counterAttackPower: 16,
	attackPower: 12
};

var mutant = {
	name: "mutant",
	healthPoints: 180,
	baseAttackPower: 8,
	counterAttackPower: 20,
	attackPower: 8
}; 

var enemies = [];
var defeated = [];
var characters = [survivor, ghoul, deathclaw, mutant];

// 1a. User will pick a character

$(document).ready(function() {
  
  	$(document).one("click", '.character_all', function(e) {

  		// get the name of the div you clicked on
  		characterSelected = $(this).attr("id");
  			$(this).appendTo("#chosen_character");
  		// loop through characters array to see if there are variables that does NOT have the name of the div you clicked on
  		for (var i = 0; i < characters.length; i++) {
			if(characters[i].name != characterSelected) {

  			// grab the divs with the name that do not match
  				enemies.push(characters[i].name);
				$('#' + characters[i].name).appendTo('#enemies');
				$('#' + characters[i].name).attr("class", "enemy_all");

			}	

			$("#instruction").text("Choose an enemy to battle from the list!");
			// $('#' + characters[i].name).removeClass('character_all');
			// console.log($(`#${characters[i].name}`).attr('class'));

  		} // closes for loop

 	});
  	// user will pick an enemy then it will append to the chosen enemy div 
  	$(document).one('click', '.enemy_all', function(e) {
       	enemySelected = $(this).attr("id");
       	
       	// console.log(enemySelected);
       	$('#' + enemySelected).appendTo('#chosen_enemy');
       	$("#instruction").text("Lets Fight! Hit the attack button to attack " + enemySelected.name);
    });

    $("#attack").on("click", function() { 
    	if(isGameover === false) {
    		enemySelected.healthPoints -= characterSelected.attackPower;
    		characterSelected.healthPoints -= enemySelected.counterAttackPower;
    		$('#' + characterSelected.name + "HP").html("HP: " + characterSelected.healthPoints);
    		$('#' + enemySelected.name + "HP").html("HP: " + enemySelected.healthPoints);
    	}

    });

}); 

  // 1b. The character will be move to the chosen character section
  // 1c. Other remaining character will be move to the enemy section
  // 2. User will pick an enemy
  // 3. when the character attack the user, their health will decrease and user attack will increase
  // 4. The attack function will repeat until the enemy is death and then will loop back to choosing a new enemy
  // 5. Check to see if user lost 
  // 6. Check to see if the enemy lost and user defeate all enemies

