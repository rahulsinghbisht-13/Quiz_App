import quizCompleteLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ answers }) {
  const skippedAnswers = answers.filter((answer) => answer === null);
  const correctAnswers = answers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswerPercent = Math.round(
    (skippedAnswers.length / answers.length) * 100
  );
  const correctAnswerPercent = Math.round(
    (correctAnswers.length / answers.length) * 100
  );
  const incorrectAnswerPercent =
    100 - skippedAnswerPercent - correctAnswerPercent;

  return (
    <div id="summary">
      <img src={quizCompleteLogo} alt="Trophy Logo" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerPercent}%</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{incorrectAnswerPercent}%</span>
          <span className="text">incorrect</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
