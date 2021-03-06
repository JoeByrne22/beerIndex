import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import IndexPage from './pages/BeerIndexPage';
import Beer from './pages/Beer';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
          <div id="full-page">
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact/>
            <Route path="/index" component={IndexPage} />
            <Route path="/beer/:name" component={Beer} />
          </div>
      </div>
    </Router>

  );
}

export default App;
