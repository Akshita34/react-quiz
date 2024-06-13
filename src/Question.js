import NextButton from "./NextButton";
import Option from "./Option";

function Question({ question, dispatch, answer, index, numQuestions }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />
    </div>
  );
}

export default Question;
