import QuizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="Quiz logo" />
      <h1>REACT QUIZ</h1>
    </header>
  );
}
