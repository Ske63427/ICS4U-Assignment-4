import { useState } from 'react'

function heronsFormula(){
    const [hfa, sethfA] = useState(0)
    const [hfb, sethfB] = useState(0)
    const [hfc, sethfC] = useState(0)
    const [hfArea, setHfArea] = useState("Press Calculate")

    function calculateArea(e){
        e.preventDefault()
        setHfArea(0.25 * Math.sqrt(4 * hfa ** 2 * hfb ** 2 - (hfa ** 2 + hfb ** 2 - hfc ** 2) ** 2))
    }

    return (
        <div className="heronsFormula">
            <form onSubmit={(e) => calculateArea(e)}>
                <h3>Heron's Formula</h3>
                <label>a:</label><br/>
                <input id="hfA" type="number" value={hfa} onChange={(event) => {sethfA(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>b:</label><br/>
                <input id="hfB" type="number" value={hfb} onChange={(event) => {sethfB(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>c:</label><br/>
                <input id="hfC" type="number" value={hfc} onChange={(event) => {sethfC(event.target.value)}} autoComplete="off"/><br/><br/>

                <label>Area:</label><br/>
                <input id="hfAnswerBlock" value={hfArea} type="text" disabled autoComplete="off"/><br/><br/>
                <button id="hfSubmit">Calculate</button>
            </form>
        </div>
    )
}

export default heronsFormula;