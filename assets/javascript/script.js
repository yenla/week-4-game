
var isGameOver = false;
var hasUserLost;

var characterSelected;
var enemySelected;

var enemyObj;
var protagonistObj;


var survivor = {
	name: "survivor",
	healthPoints: 120,
	counterAttackPower: 12,
	attackPower: 9
};

var ghoul = {
	name: "ghoul",
	healthPoints: 100,
	counterAttackPower: 10,
	attackPower: 8
};

var deathclaw = {
	name: "deathclaw",
	healthPoints: 150,
	counterAttackPower: 16,
	attackPower: 10
};

var mutant = {
	name: "mutant",
	healthPoints: 180,
	counterAttackPower: 20,
	attackPower: 8
}; 

var enemies = [];
var defeated = [];
var characters = [survivor, ghoul, deathclaw, mutant];

// User will pick a character

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
  	$(document).on('click', '.enemy_all', function(e) {
       	enemySelected = $(this).attr("id");

       	// console.log(enemySelected);
       	$('#' + enemySelected).appendTo('#chosen_enemy');
       	var enemyObj = window[enemySelected];
       	$("#instruction").text("Lets Fight! Hit the attack button to attack " + enemyObj.name);
    });


    // Setting up the attack button//

        $("#attack").on("click", function() {
	        if(isGameOver === false) {
	        var enemyObj = window[enemySelected];
	        var protagonistObj = window[characterSelected];
	        enemyObj.healthPoints -= protagonistObj.attackPower;
	        protagonistObj.healthPoints -= enemyObj.counterAttackPower;
	        $('#' + characterSelected + "HP").html("HP: " + protagonistObj.healthPoints);
	        $('#' + enemySelected + "HP").html("HP: " + enemyObj.healthPoints);
	        $("#instruction").text("You attack " + enemyObj.name + " for " + protagonistObj.attackPower + " damage. " + 
	        	enemyObj.name + " attack you back for " + enemyObj.counterAttackPower + " damage. ");
	    	}

	    	// Check for user health point and display winner or loser depend on who win //
	    	if(protagonistObj.healthPoints <= 0) {
	    		isGameOver = true;
	    		hasUserLost = true;
	    		$("instruction").text("Game Over!");
	    		$("#play_again").text("Try Again");
	    		$('#' + characterSelected + "HP"). text("Defeated");
	    		$('#' + enemySelected + "HP").text("Winner");
	    		$("#play_again").on("click", function() {
	    			location.reload();
	    		});
	    	}

	    	// Check to see if the user deafeated the enemy // 

	    	if(enemyObj.healthPoints <= 0 && hasUserLost === false) {
	    		$("#instruction").text("You deated " + enemyObj.name + "Choose a new enemy from the list!");
	    		$('#' + enemyObj.name).appendTo("#defeated");
	    		$('#' + enemyObj.name + "HP").text("Defeated");
	    		$("#attack").css("display", "none");
	    		defeated.push(enemyObj);

	    	}

	    	// Check to see if all the enemies are defeated //

    });

}); 
