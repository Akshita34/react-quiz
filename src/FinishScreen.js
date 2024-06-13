function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  return (
    <>
      <p className="result">
        🙌You scored {points} out of {maxPoints}
      </p>
      <p className="highscore">High Score: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
