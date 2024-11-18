import "./App.css";
import HeronsFormula from './components/heronsFormula.jsx';
import AmbiguousCase from './components/ambiguousCase.jsx';
import PolynomialFunction from './components/polynomialFunction.jsx';
import NewtonsMethod from './components/newtonsMethod.jsx';

function App() {
    return (
        <div className="parent">
            <HeronsFormula/>
            <br/>
            <AmbiguousCase/>
            <br/>
            <PolynomialFunction/>
            <br/>
            <NewtonsMethod/>
        </div>
    );
}

export default App;