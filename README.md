Welcome to Chris Raphel's final project for Phase-1 at Flatiron School. In this project we are going to play a game, a game which I have played and loved for a long time, Blackjack. 

I chose to use the public API, *https://deckofcardsapi.com/ which provided me the data I needed to build this game including reshuffling cards, putting cards back into the pile, card images, and drawing cards. 

Most will know the rules but if you are new to the game or it's been awhile since you last played then I'm here to help explain. 
To start, this game consists of two players, the user (you) and the dealer (your opponent). You are each dealt two cards, with users face up while dealers first card is facing down and the second facing up. You win the hand by getting closer to 21 than the dealer. You can hit for as many cards as you want to do this but you lose if you go over 21. The dealer flips over their hidden card once the user is done playing or busts. The dealer is required to hit until they have a 17 or bust. 
This game has several features and displays within it including:
*As the user, you start with $100 in your bank roll and have the option to bet as much as you have or as little as $5 but you must bet $5 to play any game. Your bankroll is displayed on the bottom left of your screen while the 3 options for the amount you want to risk ($5, $10, $25) are displayed under your name (these wil be in shape of a poker chip and the amount of money. This is a click event listener).
*Once you decide how to much to bet, you will click on the "deal" button (event listener - click) located to the right of the screen. This starts the game. 
* Each card drawn has the image of that playing card including number and suit. User cards are displayed next to user profile and vice versa with dealer. 
* after all 4 cards are dealt, the user has 2 options: 1)HIT - (green box, click event, with word/button "HIT"),  2)STAY - (red box, click event with click button "STAY")
*

The game includes several distinct event listeners including:
1) several click events for hitting, staying, betting. "you bet x dollar amount!", "are you sure you want to hit?" "Are you sure you want to stay"
2) keydown event - to play again you press spacebar
3) mouseover/focus event - focus event on $5, $10, $25 betting options - Mouseover leads to a focus over betting options. mouseover on bank roll says "Should we bet it all?"

Several objects with attributes:
    "success": true, 
    "deck_id": "kxozasf3edqu", 
    "cards": [
             "code" "image" "value" Suit"
    "remaining": 50
    "shuffled"
    "piles"
        "discard"



