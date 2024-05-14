Welcome to Chris Raphel's final project for Phase-1 at Flatiron School. In this project we are going to play a well a known card game, a game which I have played and loved for a long time, War. 

I chose to use the public API, *https://deckofcardsapi.com/ which provided me data for a deck of cards, reshuffling cards, putting cards back into the pile, card images, and drawing cards. 

 
The RULES - To start, this game consists of two players, the user (you) and the dealer (your opponent, in this case the computer). You are each dealt one card face up. Whoever has the highest card number wins that game. Winner of each game gets 1 point added to their score. 
*Whichever player gets to 10 points first wins. Points are accumulated on the scoreboard.  This game has several features and displays within it including:
*The game begins with a "start" button (event listener - click) located beneath the deck of cards. 
*Each drawn card has the image of that playing card including number and suit. Cards are displayed next to the corresponding user player. 
*Player scoreboards are displayed above corresponding players profile. Each point won triggers a  
*Mouseover/hover event is fired when player hovers over the start button which turns the color to blue and a Mouseout event is fired when the mouse leaves the button.
There is a keydown and keyup event listener that is fired on the "Human" scoreboard that changes to 'good guy' on the keydown and changed back to 'human' when the key is released.
A forEach array iteration is executed each time the winner of the specific game is drawn and is pushed under the previous winners box. This lists out each winner in order until their is a final winner of 10 points and then it restarts. 
To build out the functionality of this game I defined several functions to start the game, to keep score, to trigger a textcontext listener congratualing the winner or if there is a tie, and restart game and eng game functions. 




Several objects with attributes:
    "success": true, 
    "deck_id": "kxozasf3edqu", 
    "cards": [
             "code" "image" "value" Suit"
    "remaining": 50
    "shuffled"
    "piles"
        "discard"



