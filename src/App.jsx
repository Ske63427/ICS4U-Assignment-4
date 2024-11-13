import "./App.css";
import {useState} from 'react';
import HeronsFormula from './components/heronsFormula.jsx';
import AmbiguousCase from './components/ambiguousCase.jsx';
import PolynomialFunction from './components/polynomialFunction.jsx';

function App() {
    const [coeffs, setCoeffs] = useState("")
    const [exps, setExps] = useState("")
    const [rootGuess, setRootGuess] = useState(0)
    let [rootApprox, setRootApprox] = useState(0)

    function getPolynomial(){
        const coefficientArray = coeffs.split(" ").map(Number)
        const exponentArray = exps.split(" ").map(Number)
        return [[...coefficientArray], [...exponentArray]]
    }

    function evaluatePolynomial(values, x) {
        let polyEval = 0
        for (let i = 0; i < values[0].length; i++){
            polyEval += values[0][i] * x ** values[1][i]
        }
        return polyEval
    }


    function newtonsMethod(e){
        e.preventDefault();
        //let x1
        evaluation = evaluatePolynomial(getPolynomial(), rootGuess)
        derivativeEval = 0
        for (i = 0; i < values[0].length; i++) derivativeEval += values[1][i] * values[0][i] ** --values[1][i];
        let x1 = x0 - evaluation / derivativeEval
        while (Math.abs(x0-x1) > 0.001){
            evaluation = evaluatePolynomial(values, rootGuess)
            derivativeEval = 0
            for (i = 0; i < values[0].length; i++) derivativeEval += values[1][i] * values[0][i] ** --values[1][i];
            x1 = x0 - evaluation / derivativeEval
        }
        rootApprox.value = x1
    }

    return (
        <div className="parent">
            <HeronsFormula/>
            <br/>
            <AmbiguousCase/>
            <br/>
            <PolynomialFunction/>

            <div className="newtonsMethod">
                <form onSubmit={(e) => newtonsMethod(e)}>
                    <h3>Newtons Method(W.I.P)</h3>
                    <label>Coefficients:</label><br/>
                    <input id="pfC" type="text" value={coeffs} onChange={(event) => {setCoeffs(event.target.value)}} autoComplete="off"/><br/><br/>

                    <label>Exponents:</label><br/>
                    <input id="pfE" type="text" value={exps} onChange={(event) => {setExps(event.target.value)}} autoComplete="off"/><br/><br/>

                    <label>Root Guess:</label><br/>
                    <input id="nmG" type="number" value={rootGuess} onChange={(event) => {setRootGuess(event.target.value)}} autoComplete="off"/><br/><br/>

                    <label>Root Approximation:</label><br/>
                    <input id="nmAnswerBlock" placeholder=" " type="text" disabled autoComplete="off"/><br/><br/>

                    <button id="nmSubmit">Calculate</button>
                </form>
            </div>
            <br/>
        </div>
    );
}

export default App;