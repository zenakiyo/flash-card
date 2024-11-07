import { useState } from "react";
import "./App.css";
const questionAns = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
export default function App() {
  return (
    <div className="container">
      {questionAns.map((questionAn) => (
        <Card {...questionAn} key={questionAn.id} />
      ))}
    </div>
  );
}

function Card(questionAn) {
  const [qmode, setQmode] = useState(true);
  return (
    <div onClick={() => setQmode((q) => !q)} className={qmode ? "divq" : "divq diva"}>
      {qmode ? questionAn.question : questionAn.answer}
    </div>
  );
}
