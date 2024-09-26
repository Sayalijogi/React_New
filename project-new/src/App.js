import {useState} from "react";

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest yout new income",
];

export default function App() {
  const [step,setState] = useState(1)

  function handlePrevious(){
    if(step > 1){
      setState(step - 1)
    }
  }

  function handleNext(){
    if(step < 3){
      setState(step+1)
    }
  }

  return (

    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active":""}`}></div>
        <div className={`${step >= 2 ? "active":""}`}></div>
        <div className={`${step >= 3 ? "active":""}`}></div>
      </div>

      <p className="message">{step}:{messages[step-1]}</p>

      <div className="buttons">
        <button onClick={handlePrevious} style={{background:"#7950f2", color:"#fff"}}>Previous</button>
        <button onClick={handleNext} style={{background:"#7950f2",color:"#fff"}}>Next</button>
      </div>
    </div>
  );
}
