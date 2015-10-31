# Fight


Javascript to create fight between two <img>  sprites 


create your players: 

 var p = new Player(imageElement, Hitpoints, Damage, Defense, ComputerControlled)

  One player will be controlled by the computer, and the other will be controlled by you. 
    When creating player object be sure to make sure one is computer controlled and one is human controlled
    example: 
           `var m = new Player(mario, 200,100,100,true); //computer controlled - true == computer controlled`
           `var j =  new Player(jordan, 100,100,100,false); //human controlled - false == human controlled`
          
  You now have 100 points to divide between 3 different categories. Hitpoints, Damage, and Defense
    Hitpoints is essentially the amount of health the player will have. 
    Damage is proportional to how much damage will be dealt with a direct hit
    Defense comes into play when you use the block command, it will make the enemy's attacks less powerful
    example: 
       `var p = new Player(imageElement, Hitpoints, Damage, Defense, ComputerControlled);`
        Make sure you type the numbers in the correct order 
          

If you did everything correctly, when you load your page you should see a green health box around both players that is of width proportional to their hitpoints. If you have more hitpoints you will have a wider health box. 

If you don't see these green boxes take another look at the usage example and see if you can out what has gone wrong.

To Play: 
  
  You will enter a series of commands for your player. You will then press the spacebar to execute your commands 
  
  Up: Attack (This command is the only way to deal damage to the other player , but you will leave yourself unprotected)
  
  Down: Block (This command won't deal any damage, but it will result in very little damage being done to you)
  
  Left: Dodge Left (This command will result in you trying to dodge and attack, You may successfully dodge the attack resulting in no damage being done to you, or you could still be hit with the attack that will now be stronger than normal)
  
  Right: Dodge Right (Same sort of thing as dodge left except in reverse) Gamble - no damage, or even more damange than expected 
  
  Space bar: Execute List of commands 
  
  
  
  After entering a list of commands and pressing spacebar you should notice the health boxes of the characters getting narrower as they lose hitpoints. Eventually when they will dissapear and the character will go almost transparent with a red background denoting the character being eliminated. 
  
Take a look at the commented Usage Example for more guidance 


I hope you are able to use this code to make something interesting! 

Happy Coding! 

Nick Benoit 
10/30/15 
nick.benoit14@gmail.com 

Feel free to email with any questions
  
