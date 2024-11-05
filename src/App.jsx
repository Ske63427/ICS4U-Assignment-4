import "./App.css";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [hfArea, setHfArea] = useState("Press Calulate");

  function heronsFormula(e) {
    e.preventDefault();
    setHfArea(0.25 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2))
  }

  return (
    <div className="parent">
      <div class="heronsFormula">
        <form onSubmit={(e) => heronsFormula(e)}>
          <h3>Heron's Formula</h3>
          <label>a:</label><br/>
          <input id="hfA" type="number" value={a} onChange={(event) => { setA(event.target.value) }} autoComplete="off" /><br/><br/>

          <label>b:</label><br/>
          <input id="hfB" type="number" value={b} onChange={(event) => { setB(event.target.value) }} autoComplete="off" /><br/><br/>

          <label>c:</label><br/>
          <input id="hfC" type="number" value={c} onChange={(event) => { setC(event.target.value) }} autoComplete="off" /><br/><br/>

          <label>Area:</label><br/>
          <input id="hfAnswerBlock" value={hfArea} type="text" disabled autoComplete="off"/><br/><br/>
          <button id="hfSubmit">Calculate</button>
        </form>
      </div>

      <br />

      <div class="ambiguousCase">
        <h3>Ambiguous Case</h3>
        <label>a:</label>
        <br />
        <input id="acA" type="number" placeholder="0" autoComplete="off" />
        <br />
        <br />

        <label>b:</label>
        <br />
        <input id="acB" type="number" placeholder="0" autoComplete="off" />
        <br />
        <br />

        <label>Angle A:</label>
        <br />
        <input id="acAngleA" type="number" placeholder="0" autoComplete="off" />
        <br />
        <br />

        <input
          id="acAnswerBlock"
          placeholder=" "
          type="text"
          disabled
          autoComplete="off"
        />
        <br />
        <br />
        <button id="acSubmit">Calculate</button>
      </div>

      <br />

      <div class="newtonsMethod">
        <h3>Newtons Method</h3>
        <label>Use Polynomial Formula Inputs</label>
        <br />
        <br />
        <label>Root Guess:</label>
        <br />
        <input id="nmG" type="number" placeholder="0" autoComplete="off" />
        <br />
        <br />
        <label>Root Approximation:</label>
        <br />
        <input
          id="nmAnswerBlock"
          placeholder=" "
          type="text"
          disabled
          autoComplete="off"
        />
        <br />
        <br />
        <button id="nmSubmit">Calculate</button>
      </div>

      <br />

      <div class="polynomialFormula">
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
