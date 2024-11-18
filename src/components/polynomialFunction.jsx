import {useState} from 'react'

function polynomialFunction(){
    const [coeffs, setCoeffs] = useState("")
    const [exps, setExps] = useState("")
    const [xValue, setXValue] = useState(0)
    let [polyDisp, setPolyDisp] = useState(0)
    let [polyEval, setPolyEval] = useState(0)

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

    function polynomialFunction(e){
        e.preventDefault()
        const polyArray = getPolynomial()
        setPolyEval(evaluatePolynomial(polyArray, Number(xValue)))
        let xyz = ``
        for (let i = 0; i < polyArray[1].length; i++){
            xyz += `(${polyArray[0][i]})x^{${polyArray[1][i]}}`
            if (i != polyArray[1].length - 1) xyz += ` + `
        }
        setPolyDisp(xyz)
    }

    return (
        <div className="polynomialFormula">
            <form onSubmit={(e) => polynomialFunction(e)}>
                <h3>Polynomial Formula</h3>
                <label>Coefficients:</label><br/>
                <input id="pfC" type="text" value={coeffs} onChange={(event) => {setCoeffs(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>Exponents:</label><br/>
                <input id="pfE" type="text" value={exps} onChange={(event) => {setExps(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>x Value:</label><br/>
                <input id="pfX" type="text" value={xValue} onChange={(event) => {setXValue(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>Polynomial Function:</label><br/>
                <input id="pfFunction" value={polyDisp} type="text" disabled autoComplete="off"/><br/><br/>

                <label>Polynomial Evaluation</label><br/>
                <input id="pfEval" type="number" value={polyEval} disabled autoComplete="off"/><br/><br/>

                <button id="pfSubmit">Calculate</button>
            </form>
        </div>
    )
}

export default polynomialFunction