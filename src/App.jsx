import "./App.css";
import {useState} from 'react';
import HeronsFormula from './components/heronsFormula.jsx';
import AmbiguousCase from './components/ambiguousCase.jsx';
import PolynomialFunction from './components/polynomialFunction.jsx';

function App() {
    return (
        <div className="parent">
            <HeronsFormula/>
            <br/>
            <AmbiguousCase/>
            <br/>
            <PolynomialFunction/>

            <div className="newtonsMethod">
                <form>
                    <h3>Newtons Method(W.I.P)</h3>
                    <label>Use Polynomial Formula Inputs</label><br/><br/>
                    <label>Root Guess:</label><br/>
                    <input id="nmG" type="number" placeholder="0" autoComplete="off"/><br/><br/>
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