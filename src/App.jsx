import "./App.css";
import { useState } from 'react';

function App() {
  const [hfa, sethfA] = useState(0)
  const [hfb, sethfB] = useState(0)
  const [hfc, sethfC] = useState(0)
  const [hfArea, setHfArea] = useState("Press Calulate")

  function heronsFormula(e){
    e.preventDefault();
    setHfArea(0.25 * Math.sqrt(4 * hfa ** 2 * hfb ** 2 - (hfa ** 2 + hfb ** 2 - hfc ** 2) ** 2))
  }

  let triangle
  const [aca, setacA] = useState(0);
  const [acb, setacB] = useState(0);
  const [acAA, setacAA] = useState(0);
  const [acCase, setacCase] = useState("Press Calulate");

  function ambiguousCase(e){
    e.preventDefault();
    let h = Math.abs(Math.round(acb * Math.sin((acAA * Math.PI) / 180)))
    /** Test Cases: 
     * 15, 15, 30: one triangle
     * 15, 23, 30: two triangles
     * 15, 30, 30: right triangle
     * 15, 30, 40: no triangles
     * 21, 14, 115: one triangle
     * 11, 15, 125: no triangles
     */
    if (acAA < 90) {
      if (aca > h && aca < acb) triangle = "Two Triangles"
      else if (aca == h) triangle = "Right Triangle"
      else if (aca < h) triangle = "No Triangle"
      else triangle = "One Triangle"
    } else {
      if (aca < acb || aca == acb) triangle = "No Triangles"
      else if (aca > acb) triangle = "One Triangle"
    }
    setacCase(triangle)
  }

  function newtonsMethod(e){
    
  }

  return (
    <div className="parent">
      <div className="heronsFormula">
        <form onSubmit={(e) => heronsFormula(e)}>
          <h3>Heron's Formula</h3>
          <label>a:</label><br/>
          <input id="hfA" type="number" value={hfa} onChange={(event) => {sethfA(event.target.value)}} autoComplete="off" /><br/><br/>

          <label>b:</label><br/>
          <input id="hfB" type="number" value={hfb} onChange={(event) => {sethfB(event.target.value)}} autoComplete="off" /><br/><br/>

          <label>c:</label><br/>
          <input id="hfC" type="number" value={hfc} onChange={(event) => {sethfC(event.target.value)}} autoComplete="off" /><br/><br/>

          <label>Area:</label><br/>
          <input id="hfAnswerBlock" value={hfArea} type="text" disabled autoComplete="off"/><br/><br/>
          <button id="hfSubmit">Calculate</button>
        </form>
      </div>

      <br />

      <div className="ambiguousCase">
        <form onSubmit={(e) => ambiguousCase(e)}>
        <h3>Ambiguous Case</h3>
          <label>a:</label><br/>
          <input id="acA" type="number" value={aca} onChange={(event) => {setacA(event.target.value)}} autoComplete="off"/><br/><br/>

          <label>b:</label><br/>
          <input id="acB" type="number" value={acb} onChange={(event) => {setacB(event.target.value)}} autoComplete="off"/><br/><br/>

          <label>Angle A:</label><br/>
          <input id="acAngleA" type="number" value={acAA} onChange={(event) => {setacAA(event.target.value)}} autoComplete="off"/><br/><br/>

          <input id="acAnswerBlock" value={acCase} type="text" disabled autoComplete="off"/><br/><br/>
          <button id="acSubmit">Calculate</button>
        </form>
      </div>

      <br/>

      <div className="newtonsMethod">
        <h3>Newtons Method</h3>
        <label>Use Polynomial Formula Inputs</label><br/><br/>
        <label>Root Guess:</label><br/>
        <input id="nmG" type="number" placeholder="0" autoComplete="off"/><br/><br/>
        <label>Root Approximation:</label><br/>
        <input id="nmAnswerBlock" placeholder=" " type="text" disabled autoComplete="off"/><br/><br/>
        <button id="nmSubmit">Calculate</button>
      </div>

      <br/>

      <div className="polynomialFormula">
        <h3>Polynomial Formula</h3>
        <label>Coefficients:</label>
        <br />
        <input id="pfC" type="text" placeholder="a b c" autoComplete="off" />
        <br />
        <br />

        <label>Exponents:</label>
        <br />
        <input id="pfE" type="text" placeholder="2 1 0" autoComplete="off" />
        <br />
        <br />

        <label>x Value:</label>
        <br />
        <input id="pfX" type="text" placeholder="0" autoComplete="off" />
        <br />
        <br />

        <label>Polynomial Function:</label>
        <br />
        <input
          id="pfFunction"
          placeholder=" "
          type="text"
          disabled
          autoComplete="off"
        />
        <br />
        <br />

        <label>Polynomial Evaluation</label>
        <br />
        <input id="pfEval" type="number" disabled autoComplete="off" />
        <br />
        <br />

        <button id="pfSubmit">Calculate</button>
      </div>
    </div>
  );
}

export default App;
