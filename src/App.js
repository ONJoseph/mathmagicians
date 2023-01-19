import react from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import icon from './Img/math_icon.png';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends react.Component {
  render() {
    return (
      <Router>
        <main className="container">
          <header>
            <div className="title">
              <img src={icon} alt="Math icon" className="icon" />
              <h1><a href="/">Math Magicians</a></h1>
            </div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/Calculator">Calculator</Link>
              <Link to="/Quote">Quote</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
      </Router>
    );
  }
}

export default App;

