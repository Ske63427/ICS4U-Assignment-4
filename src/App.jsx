import './App.css'

function App() {

  return (
      <div className="parent">

        <div class="heronsFormula">
          <h3>Heron's Formula</h3>
          <label>a:</label><br/>
          <input id="hfA" type="number" value="0" autoComplete="off"/><br/><br/>

          <label>b:</label><br/>
          <input id="hfB" type="number" placeholder="0" autoComplete="off"/><br/><br/>

          <label>c:</label><br/>
          <input id="hfC" type="number" placeholder="0" autoComplete="off"/><br/><br/>

          <label>Area:</label><br/>
          <input id="hfAnswerBlock" placeholder=" " type="text" disabled autoComplete="off"/><br/><br/>
          <button id="hfSubmit">Calculate</button>
        </div>

      <br/>

        <div class="ambiguousCase">
          <h3>Ambiguous Case</h3>
          <label>a:</label><br/>
          <input id="acA" type="number" placeholder="0" autoComplete="off"/><br/><br/>

          <label>b:</label><br/>
          <input id="acB" type="number" placeholder="0" autoComplete="off"/><br/><br/>

          <label>Angle A:</label><br/>
          <input id="acAngleA" type="number" placeholder="0" autoComplete="off"/><br/><br/>

          <input id="acAnswerBlock" placeholder=" " type="text" disabled autoComplete="off"/><br/><br/>
          <button id="acSubmit">Calculate</button>
        </div>

      <br/>

        <div class="newtonsMethod">
          <h3>Newtons Method</h3>
          <label>Use Polynomial Formula Inputs</label><br/><br/>
          <label>Root Guess:</label><br/>
          <input id="nmG" type="number" placeholder="0" autoComplete="off"/><br/><br/>
          <label>Root Approximation:</label><br/>
          <input id="nmAnswerBlock" placeholder=" " type="text" disabled autoComplete="off"/><br/><br/>
          <button id="nmSubmit">Calculate</button>
        </div>

      <br/>

        <div class="polynomialFormula">
          <h3>Polynomial Formula</h3>
          <label>Coefficients:</label><br/>
          <input id="pfC" type="text" placeholder="a b c" autoComplete="off"/><br/><br/>

          <label>Exponents:</label><br/>
          <input id="pfE" type="text" placeholder="2 1 0" autoComplete="off"/><br/><br/>

          <label>x Value:</label><br/>
          <input id="pfX" type="text" placeholder="0" autoComplete="off"/><br/><br/>

          <label>Polynomial Function:</label><br/>
          <input id="pfFunction" placeholder=" " type="text" disabled autoComplete="off"/><br/><br/>

          <label>Polynomial Evaluation</label><br/>
          <input id="pfEval" type="number" disabled autoComplete="off"/><br/><br/>
          
          <button id="pfSubmit">Calculate</button>
        </div>

      </div>
  )
}

export default App
