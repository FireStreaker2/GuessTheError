"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function GameInterface() {
    var [score, setScore] = useState(0);
    var [questionNumber, setQuestionNumber] = useState(1);

    const increment = () => {
        setScore(score += 50);
        setQuestionNumber(questionNumber += 1);
    }

    const restart = (response, answer) => {
        alert(`Sorry, but your answer was wrong. You answered: ${response}, but it was actually ${answer}. Final Score: ${score}`);
        if (score === 0) {
            window.location.reload();
        } else {
            setScore(score = 0);
            setQuestionNumber(questionNumber = 1);
        }
    }

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
    var messages = Object.values(httpStatusCodes)

    var questionIndex = Math.floor(Math.random() * codes.length);
    var questionText = codes[questionIndex];

    var answer = httpStatusCodes[questionText];

    var choice = Math.floor(Math.random() * 4) + 1;
    switch (choice) {
        case 1:
            var option1 = answer;
            var option2 = messages[Math.floor(Math.random() * messages.length)];
            var option3 = messages[Math.floor(Math.random() * messages.length)];
            var option4 = messages[Math.floor(Math.random() * messages.length)];
            break;

        case 2:
            var option1 = messages[Math.floor(Math.random() * messages.length)];
            var option2 = answer;
            var option3 = messages[Math.floor(Math.random() * messages.length)];
            var option4 = messages[Math.floor(Math.random() * messages.length)];
            break;

        case 3:
            var option1 = messages[Math.floor(Math.random() * messages.length)];
            var option2 = messages[Math.floor(Math.random() * messages.length)];
            var option3 = answer;
            var option4 = messages[Math.floor(Math.random() * messages.length)];
            break;

        case 4:
            var option1 = messages[Math.floor(Math.random() * messages.length)];
            var option2 = messages[Math.floor(Math.random() * messages.length)];
            var option3 = messages[Math.floor(Math.random() * messages.length)];
            var option4 = answer;
            break;
    }

    const validate = (event) => {
        var response = event.target.innerText;
        console.log(response);

        (response == answer) ? increment() : restart(response, answer);
    }

    return (
        <main>
            <div className={styles.stats}>
                <p className={styles.scoreP}>Score: {score}</p>
                <p>Question #{questionNumber}</p>
            </div>

            <div className={styles.question}>
                <p>{questionText}</p>
            </div>

            <div className={styles.options}>
                <button className={styles.button} onClick={validate}>{option1}</button>
                <button className={styles.button} onClick={validate}>{option2}</button>
                <button className={styles.button} onClick={validate}>{option3}</button>
                <button className={styles.button} onClick={validate}>{option4}</button>
            </div>
        </main>
    )
}