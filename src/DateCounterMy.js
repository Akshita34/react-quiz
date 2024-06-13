import { act, useReducer, useState } from "react";

function reducer(state, action) {
  //   console.log(action.type, action.payload);
  //   if (action.type === "inc") return state + action.payload;
  //   if (action.type === "dec") return state - action.payload;
  //   if (action.type === "setCount") return state + action.payload;
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "reset":
      return { ...state, count: 0, step: 1 };
    case "setStep":
      return { ...state, step: action.payload };

    default:
      throw new Error("Unkonwn action");
  }
}

export default function DateCounterMy() {
  //   const [count, setCount] = useState(0);
  //   const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleOnDec() {
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  }

  function handleOnInc() {
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  }

  function handleOnChange(e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }

  function handleReset() {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "reset" });
  }

  function handleDefineCount(e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={handleOnChange}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={handleOnDec}>-</button>
        <input type="text" value={count} onChange={handleDefineCount} />
        <button onClick={handleOnInc}>+</button>
      </div>

      <p>{date.toDateString()}</p>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
