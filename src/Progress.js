function Progress({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={answer != null ? index + 1 : index} />
      <p>
        Question {index + 1}/{numQuestions}
      </p>
      <p>
        {points}/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
