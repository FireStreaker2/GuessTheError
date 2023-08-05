import Link from "next/link";
import styles from "./page.module.css";
import GameInterface from "./GameInterface";

export default function Home() {

  /**
    HOW THE LOGIC WORKS
    * display random status code into box
    * pull correct answer + some other random answers
    * put answers into four options
    * if user presses correct button, increment score by 50, question by 1
    * otherwise reset score and question by setting them to 0

    This can be found in the GameInterface.js file
  */
  
  return (
    <main className={styles.main}>
      <h1>Guess The Error</h1>
      <GameInterface />
      <footer className={styles.footer}>
        <p>Made by FireStreaker2</p>
        <Link href="https://github.com/FireStreaker2/GuessTheError" target="_blank" className={styles.hyperlink}>GitHub</Link>
      </footer>
    </main>
  )
}