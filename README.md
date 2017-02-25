# week-4-game


HW - RPG Game


Live Link 

https://yenla.github.io/Hangman-Game/


Summary

• When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.
• The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.
• The player chooses an opponent by clicking on an enemy's picture.
• Once the player selects an opponent, that enemy is moved to a defender area.
• The player will now be able to click the attack button.
• Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture.
• The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.
• The player will keep hitting the attack button in an effort to defeat their opponent.
• When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.
• The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.


Code Explaination

In this assignment, I use an on click event for user to choose the character and enemy. I also use appendTo to move the character to their correct div. I declare a variable and uses object to give the character their names and health points along with the attack points.

For example:

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

  		} // closes for loop

 	});