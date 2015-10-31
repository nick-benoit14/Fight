
// Q: I want to make my characters do different things
  //- A:Good! take a look at Player.drawPlayer on line 183

//Q: I want fights to work differently
  //A - the outcomes of fights are determined in Fight.decide() on line 49

//Q: I want something different to happen when someone Wins
  //A: Very nice, Look at Fight.checkWin() on line 109



function Fight(player_a, player_b){

  this.getKeypress = function(eval){
    if(player_a.npc == true){if(eval.which >= 37 && eval.which <= 41) player_b.addUserInput(eval);}
    else{if(eval.which >= 37 && eval.which <= 41) player_a.addUserInput(eval);}

    if(eval.which == 32) console.log(fight.turn());
  }


  player_a.drawPlayer(0); //draw health boxes
  player_b.drawPlayer(0);

  this.turn = function(){
    this.checkWin();
    //generate Fight Sequences
    player_a.generateFightSequence();
    player_b.generateFightSequence();

    //compare fight sequences
    var lengthA = player_a.fightSequence.length;
    var lengthB = player_b.fightSequence.length;

    var minLength;
    if(lengthA < lengthB) minLength = lengthA; //set minimum fight sequence length
    else{minLength = lengthB;}

    for(var i = 0; i < minLength; i++){ //only compare where both sequences are defined
      this.decide(player_a.fightSequence[i], player_b.fightSequence[i]);
      player_a.drawPlayer(player_a.fightSequence[i]);
      player_b.drawPlayer(player_b.fightSequence[i]);
    }

    //reset player fight sequence
    player_a.resetSequence();
    player_b.resetSequence();
    return "Player A: " + player_a.hitpoints + "   |   Player B: " + player_b.hitpoints;
  }

  this.decide = function(a, b){
    var a_hitpoints = player_a.hitpoints;
    var a_defense = player_a.defense;
    var a_damage = player_a.damage;

    var b_hitpoints = player_b.hitpoints;
    var b_defense = player_b.defense;
    var b_damage = player_b.damage;
    if(a == 38){ //player A attck
      if(b == 40){ //block - subract (defense / 2) from damage
        a_damage -= (b_defense / 8);
        if(a_damage < 0)a_damage = 0; //check for negative numbers
        b_hitpoints -= a_damage;
      }
      else if(b == 39){ //dodge right
        if((Math.floor(Math.random() * 10) % 2) == 1){ //hit
          b_hitpoints -= (a_damage * 4);
        }
      }
      else if(b == 37){ //dodge left
        if((Math.floor(Math.random() * 10) % 2) == 1){ //hit
          b_hitpoints -= (a_damage * 4);
        }
      }
      else{b_hitpoints -= a_damage;}
    }

    player_b.hitpoints = b_hitpoints;
    this.checkWin();

    if(b == 38){ //player B attck
      if(a == 40){ //block - subract (defense / 2) from damage
        b_damage -= (a_defense / 8);
        if(b_damage < 0)b_damage = 0; //check for negative numbers
        a_hitpoints -= b_damage;
      }
      else if(a == 39){ //dodge right
        if((Math.floor(Math.random() * 10) % 2) == 1){ //hit
          a_hitpoints -= (b_damage * 4);
        }
      }
      else if(a == 37){ //dodge left
        if((Math.floor(Math.random() * 10) % 2) == 1){ //hit
          a_hitpoints -= (b_damage * 4);
        }
      }
      else{a_hitpoints -= b_damage;}

    }

    player_a.hitpoints = a_hitpoints;
    this.checkWin();


    return "Player A: " + player_a.hitpoints + "   |   Player B: " + player_b.hitpoints;
  }

  this.checkWin = function(){
    if(player_a.hitpoints < 0 || player_b.hitpoints < 0){
      var h = document.createElement("H1");                // Create a <h1> element
      var t = document.createTextNode("Game Over");     // Create a text node
      h.appendChild(t);
      h.style.color = "green";
      h.style.textAlign="center";
      h.style.position = 'absolute';
      h.style.top = 300;
      document.body.appendChild(h);
    }
  }


}
// ----------------------------- End of Player Object


function Player(inImage, inHitpoints, inDamage, inDefense, inNpc){

  this.image = inImage

  this.hitpoints; //sum to 100
  this.damage;
  this.defense;

  this.fightSequence = [];
  this.npc = inNpc;

//add player css
  this.image.style.position = "absolute";
  this.image.style.left = 0;
  this.image.style.top = 0;


  var total_points;
  if((total_points = inHitpoints + inDamage + inDefense) > 100){ //make sure point total adds to 100
    inHitpoints =  Math.floor(inHitpoints / total_points * 100); //subtract extra values over 100 from each category
    inDamage = Math.floor(inDamage / total_points * 100);
    inDefense = Math.floor(inDefense /total_points * 100);
  }

  this.hitpoints = inHitpoints
  this.damage = inDamage / 4;
  this.defense = inDefense / 4;

//--- Class Methods

  this.generateFightSequence = function(){
    if(this.npc == false){}
    else{this.fightSequence = this.generateRandomSequence();}
  }

  this.addUserInput = function(eval){
    this.fightSequence.push(eval.which);
  }
  this.getUserInput = function(){ //return sequence

    var temp = [];
    temp = this.fightSequence;
    this.fightSequence = [];
    return temp;
  }

  this.generateRandomSequence = function(){
    var sequence = [];
    var length = Math.floor((Math.random() * 5)) + 1;
    for(var i = 0; i < length; i++){
      var val = 38
      sequence.push(val);

      val = Math.floor(Math.random() * 4) + 37;
      sequence.push(val);
    }
    return sequence;
  }

  this.drawPlayer = function(state){

    //remove old state
    this.image.style.border = "";

    if(this.hitpoints < 0){
        this.image.style.opacity = ".1";
        this.image.style.background = "red";
    }

    this.image.style.border =  Math.floor((this.hitpoints / 5)) + "px solid green";

// If you want your sprites to do stuff on different actions, add those things here

    if(state == 38){ //up / attack
    }
    else if(state == 40){ //down / block
    }
    else if(state == 39){ //right
    }
    else if(state == 37){ //left
    }
  }
  this.resetSequence = function(){this.fightSequence = [];}
}
