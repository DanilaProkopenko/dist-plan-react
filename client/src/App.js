import './App.css';
import Home from "./components/pages/Home";
import OurTours from "./components/pages/OurTours";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import Planet from "./components/planet/Planet";
import Registration from "./components/planet/Registration";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/ourTours" component={OurTours} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/planet/:id" component={Planet} />
          <Route exact path="/planet/registration/:id" component={Registration} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;