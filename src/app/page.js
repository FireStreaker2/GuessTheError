import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  /* 
    HOW THE LOGIC WORKS

    * randomly select a type: select code or select message
    * pull a random one 
    * display it into box
    * pull correct answer + some other random answers
    * put answers into four options
    * if user presses correct button, increment score by 50, question by 1
    * otherwise reset score and question by setting them to 0

  */

  // function MyButton(props) {
  //   const { options, styles } = props;

  //   return (
  //     <div className={styles.options}>
  //       {options.map((option, index) => (
  //         <button key={index} className={styles.button} onClick={props.function}>
  //           {option}
  //         </button>
  //       ))}
  //     </div>
  //   );
  // }

  // const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  // const styles = {
  //   options: "options-class",
  //   button: "button-class",
  // };


  var score = 0;
  var questionNumber = 0;

  const httpStatusCodes = {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Early Hints",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    306: "Switch Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required"
  };

  var codes = Object.keys(httpStatusCodes);
  var messages = Object.values(httpStatusCodes);

  var type = Math.round(Math.random());

  var option1 = "1"
  var option2 = "2"
  var option3 = "3";
  var option4 = "4";
  
  return (
      <main className={styles.main}>
        <h1>Guess The Error</h1>

        <div className={styles.stats}>
          <p className={styles.scoreP}>Score: {score}</p>
          <p>Question #{questionNumber}</p>
        </div>

        <div className={styles.question}>
          <p>placeholder question text</p>
        </div>

        <div className={styles.options}>
          <button className={styles.button}>{option1}</button>
          <button className={styles.button}>{option2}</button>
          <button className={styles.button}>{option3}</button>
          <button className={styles.button}>{option4}</button>

          {/* <MyButton options={options} styles={styles} function={() => {alert("hi")}} /> */}
        </div>

        <footer className={styles.footer}>
          <p>Made by FireStreaker2</p>
          <a>GitHub</a>
        </footer>
      </main>
  )
}