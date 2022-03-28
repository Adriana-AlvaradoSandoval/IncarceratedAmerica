
import Footer from './components/Footer'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Router>
       {/* <Header /> */}

        <Switch>
        {/*  <Route path="/report">
            <Report />
          </Route>
  */}
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
