package NumberGuessGame;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

import Game.GameWriteable;

public class NumberGame extends Game implements GameWriteable  {
    int guesses;
    int numToGuess;
    static Scanner sc = new Scanner(System.in);
    ArrayList<Integer> previousGuesses = new ArrayList<>();
    int[]prevGuesses;

    NumberGame(int low, int high) {
        low = 0;
        high = 50;
        guesses = 0;
        System.out.println("I'm thinking of a number " + low + " to " + high);
        Random r = new Random();
        numToGuess = r.nextInt(low,high);

    }

    void play() {
        System.out.println("begin play!");
        int guess = getGuess();
       
        while(guess != numToGuess){
             System.out.println("You guessed " + guess);
        
             if(guess<numToGuess){
                System.out.println("The number is higher!");}
            if(guess>numToGuess){
                System.out.println("The number is lower!");
            }
            guess = getGuess();
             }
         System.out.println("Done playing!");
            System.out.println("You guessed the number in " + (guesses) + " guesses!");
    }

    int getGuess() {
        if(sc.hasNextInt()){
            int guess = sc.nextInt();
             if(previousGuesses.contains(guess)) {
                System.out.println("You already guessed this!");
                return getGuess();
            }
        previousGuesses.add(guess);
        guesses++;
        return guess;
        }  else{
            System.out.println("Please type in an integer");
            sc.next();
            return getGuess();
        }
    }

    int getNumGuesses() {
        return guesses;
    }

@Override
public String getScore(){
    return Integer.toString(guesses);
}
@Override
public boolean isHighScore(string score, String currentHighScore){
    if (currentHighScore == null) return true;
    return Integer.parseInt(score)<Integer.praseInt(currentHighScore);
}
@Override
public String getGameName(){
    return "NumberGuess";
}
}

