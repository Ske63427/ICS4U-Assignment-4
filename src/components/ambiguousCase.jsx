import { useState } from "react";

function ambiguousCase() {
  let triangle;
  const [aca, setacA] = useState(0);
  const [acb, setacB] = useState(0);
  const [acAA, setacAA] = useState(0);
  const [acCase, setacCase] = useState("Press Calculate");

  function ambiguousCase(e) {
    e.preventDefault();
    let h = Math.abs(Math.round(acb * Math.sin((acAA * Math.PI) / 180)));
    /** Test Cases:
     * 15, 15, 30; 21, 14, 115: one triangle
     * 15, 30, 40; 11, 15, 125: no triangles
     * 15, 23, 30: two triangles
     * 15, 30, 30: right triangle
     */
    if (acAA < 90) {
      if (aca > h && aca < acb) {
        triangle = "Two Triangles";
      } else if (aca == h) {
        triangle = "Right Triangle";
      } else if (aca < h) {
        triangle = "No Triangle";
      } else triangle = "One Triangle";
    } else {
      triangle = aca <= acb ? "No Triangles" : "One Triangle";
    }
    setacCase(triangle);
  }

  return (
    <div className="ambiguousCase">
      <form onSubmit={(e) => ambiguousCase(e)}>
        <h3>Ambiguous Case</h3>
        <label>a:</label>
        <br />
        <input
          id="acA"
          type="number"
          value={aca}
          onChange={(event) => {
            setacA(event.target.value);
          }}
          autoComplete="off"
        />
        <br />
        <br />

        <label>b:</label>
        <br />
        <input
          id="acB"
          type="number"
          value={acb}
          onChange={(event) => {
            setacB(event.target.value);
          }}
          autoComplete="off"
        />
        <br />
        <br />

        <label>Angle A:</label>
        <br />
        <input
          id="acAngleA"
          type="number"
          value={acAA}
          onChange={(event) => {
            setacAA(event.target.value);
          }}
          autoComplete="off"
        />
        <br />
        <br />

        <input
          id="acAnswerBlock"
          value={acCase}
          type="text"
          disabled
          autoComplete="off"
        />
        <br />
        <br />
        <button id="acSubmit">Calculate</button>
      </form>
    </div>
  );
}

export default ambiguousCase;
