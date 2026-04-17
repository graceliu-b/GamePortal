import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;
public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Welcome to the Number Guess Game!");
        ArrayList<Game> games = new ArrayList<>();
        HashMap<Integer, Integer> hg = new HashMap<>(); //<key,value>; in this case both keys & values are integers
        
        Scanner sc = new Scanner(System.in);
        System.out.println("To play a game, press 'y'. If you want to stop playing, type anything other than 'y'.");
        while (sc.hasNext() && sc.next().equals("y")) {
            Game g = new Game(1, 100);
            g.play();
            games.add(g);
            System.out.println("press 'y' to play another game.");
            //int val = hg.get(g.getNumGuesses());
            int key = g.getNumGuesses(); //g stands for games/tries
            if(hg.containsKey(key)){
            hg.put(key, hg.get(key) + 1);
            } else{
                hg.put(key,1);
            }
        }
        
        System.out.println(hg);
    }

    public static void getBestGame(ArrayList<Game> games) {
        // best game
        int minGame = 0;
        for (Game g : games) {
            if (g.getNumGuesses() < minGame) {
                minGame = g.getNumGuesses();
            }
        }
        System.out.println("min game is: " + minGame);
    }
}
