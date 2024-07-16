import Question from "./Question.js";
import Answer from "./Answer.js";

export default function testData() {
  return [
    new Question(
      "What does HTML stand for?",
      [
        new Answer("Hyper Text Markup Language"),
        new Answer("High Tech Markup Language"),
        new Answer("Hyperlink Text Markup Language"),
        new Answer("Home Tool Markup Language"),
      ],
      "Hyper Text Markup Language"
    ),
    new Question(
      "Which technology is responsible for the styling of web pages?",
      [
        new Answer("JavaScript"),
        new Answer("HTML"),
        new Answer("CSS"),
        new Answer("Python"),
      ],
      "CSS"
    ),
    new Question(
      "Which programming language is used for interactivity to websites?",
      [
        new Answer("HTML"),
        new Answer("CSS"),
        new Answer("Python"),
        new Answer("JavaScript"),
      ],
      "JavaScript"
    ),
    new Question(
      "Which part of web development is used for handling data storage?",
      [
        new Answer("Front-end development"),
        new Answer("Back-end development"),
        new Answer("Full-stack development"),
        new Answer("Middleware development"),
      ],
      "Back-end development"
    ),
    new Question(
      "What does 'N' in JSON refer to?",
      [
        new Answer("Notation"),
        new Answer("Native"),
        new Answer("Network"),
        new Answer("Namespace"),
      ],
      "Notation"
    ),
    new Question(
      "Which HTML tag is used to create a hyperlink?",
      [
        new Answer("<link>"),
        new Answer("<a>"),
        new Answer("<href>"),
        new Answer("<hyperlink>"),
      ],
      "<a>"
    ),
    new Question(
      "What is the capital of France?",
      [
        new Answer("Berlin"),
        new Answer("Madrid"),
        new Answer("Paris"),
        new Answer("Rome"),
      ],
      "Paris"
    ),
    new Question(
      "Which CSS property is used to change the text color of an element?",
      [
        new Answer("font-color"),
        new Answer("text-color"),
        new Answer("color"),
        new Answer("background-color"),
      ],
      "color"
    ),
    new Question(
      "What does CSS stand for?",
      [
        new Answer("Cascading Style Sheets"),
        new Answer("Computer Style Sheets"),
        new Answer("Creative Style Sheets"),
        new Answer("Colorful Style Sheets"),
      ],
      "Cascading Style Sheets"
    ),
    new Question(
      "Which JavaScript function used to get an element by its ID?",
      [
        new Answer("getElementByClass"),
        new Answer("getElementById"),
        new Answer("querySelector"),
        new Answer("getElementByTagName"),
      ],
      "getElementById"
    ),
  ];
}
