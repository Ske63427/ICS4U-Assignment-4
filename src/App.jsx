import "./App.css";
import { useState } from 'react';
import HeronsFormula from './components/heronsFormula.jsx';
import AmbiguousCase from './components/ambiguousCase.jsx';

function App() {

   const [coeffs, setCoeffs] = useState(0)
   const [exps, setExps] = useState(0)
   const [xValue, setXValue] = useState(0)
   const [polyDisp, setPolyDisp] = useState(0)
   const [polyEval, setPolyEval] = useState(0)


   function getPolynomial(){
      const coefficientArray = coeffs.split(" ")
      const exponentArray = exps.split(" ")
      return [[...coefficientArray], [...exponentArray]]
   }

   function evaluatePolynomial(values, x) {
      let polyEval = 0
      for (i = 0; i < values[0].length; i++){
         polyEval += values[0][i] * x ** values[1][i]
      }
      return polyEval
   }
   
   

  return (
    <div className="parent">
      <HeronsFormula />
      <br/>
      <AmbiguousCase />
      <br/>

      <div className="newtonsMethod">
        <form>
          <h3>Newtons Method</h3>
          <label>Use Polynomial Formula Inputs</label><br/><br/>
          <label>Root Guess:</label><br/>
          <input id="nmG" type="number" placeholder="0" autoComplete="off"/><br/><br/>
          <label>Root Approximation:</label><br/>
          <input id="nmAnswerBlock" placeholder=" " type="text" disabled autoComplete="off"/><br/><br/>
          <button id="nmSubmit">Calculate</button>
        </form>
      </div>

      <br/>

      <div className="polynomialFormula">
        <form onSubmit={(e) => polynomialFunction(e)}>
          <h3>Polynomial Formula</h3>
          <label>Coefficients:</label><br/>
          <input id="pfC" type="text" value={coeffs} onChange={(event) => {setCoeffs(event.target.value)}} autoComplete="off" /><br/><br/>

          <label>Exponents:</label><br/>
          <input id="pfE" type="text" value={exps} onChange={(event) => {setExps(event.target.value)}} autoComplete="off" /><br/><br/>

          <label>x Value:</label><br/>
          <input id="pfX" type="text" value={xValue} onChange={(event) => {setXValue(event.target.value)}} autoComplete="off" /><br/><br/>

          <label>Polynomial Function:</label><br/>
          <input id="pfFunction" value={polyDisp} type="text" disabled autoComplete="off"/><br/><br/>

          <label>Polynomial Evaluation</label><br/>
          <input id="pfEval" type="number" value={polyEval} disabled autoComplete="off" /><br/><br/>

          <button id="pfSubmit">Calculate</button>
        </form>
      </div>
    </div>
  );
}

export default App;