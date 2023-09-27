import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply on Project 💼", "Congrats 🎉"];

export default function App() {
  return (
    <div>
      <Step />
    </div>
  );
}

function Step() {
  // set a default a value of this default variable, and it returns an Arr,
  // we are destructuring it and 1st para --> default value for our state & 2nd para --> function that we use to update the state variable

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  console.log(step);
  console.log(setStep);

  function handleprevious() {
    // here we are using step state variable and updating on the current state

    // callback function which will recieve as an argument current value of the state
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);

    // should not do, update state on current state, this will only update once not twice, instead pass-in a callback function which will recieve as an argument current value of the state
    // if (step < 3) {
    //   setStep(step + 1);
    //   setStep(step + 1);

    // this will works and update the state twice, because the second line will recieve the update value in the callback
    // if (step > 1)
    // setStep((s) => s - 1);
    // setStep((s) => s - 1);
    // }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleprevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
