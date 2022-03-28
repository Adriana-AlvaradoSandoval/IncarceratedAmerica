import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Report from './Report';
import About from './About';
import LearnMore from './LearnMore';
import Resources from './Resources';
import GetInvolved from './GetInvolved';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/learnMore">
            <LearnMore />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/getInvolved">
            <GetInvolved />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

     {/*   <Footer /> */}

      </Router>
    </div>
  );
}

export default App;
