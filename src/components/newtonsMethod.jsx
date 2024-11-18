import "./newtonsMethod.css";
import { useState } from 'react';

function newtonsMethod() {
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

    function evaluateDerivative(values, x){
        let derivativeEval = 0;
        for (let i = 0; i < values[0].length; i++) {
            if (values[1][i] !== 0) {
                derivativeEval += values[1][i] * values[0][i] * x ** (values[1][i] - 1);
            }
        }
        return derivativeEval
    }

    function approximate(x0, evaluation, derivative){
        return x0 - (evaluation / derivative)
    }

    function newtonsMethod(e){
        e.preventDefault();
        let x0 = rootGuess
        let rootApprox

        for (let i = 0; i < 10; i++){
            rootApprox = approximate(x0, evaluatePolynomial(getPolynomial(), x0), evaluateDerivative(getPolynomial(), x0))
            x0 = rootApprox
        }
        setRootApprox(x0);
    }

    return (
        <div className="newtonsMethod">
            <form onSubmit={(e) => newtonsMethod(e)}>
                <h3>Newtons Method</h3>
                <label>Coefficients:</label><br/>
                <input id="pfC" type="text" value={coeffs} onChange={(event) => {setCoeffs(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>Exponents:</label><br/>
                <input id="pfE" type="text" value={exps} onChange={(event) => {setExps(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>Root Guess:</label><br/>
                <input id="nmG" type="number" value={rootGuess} onChange={(event) => {setRootGuess(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>Root Approximation:</label><br/>
                <input id="nmAnswerBlock" value={rootApprox} type="text" disabled autoComplete="off"/><br/><br/>

                <button id="nmSubmit">Calculate</button>
            </form>
        </div>
    )
}

export default newtonsMethod