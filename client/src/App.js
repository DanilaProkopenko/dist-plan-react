import './App.css';
import Home from "./components/pages/Home";
import OurTours from "./components/pages/OurTours";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import Planet from "./components/planet/Planet";
import Registration from "./components/planet/Registration";
import Footer from "./components/layout/Footer"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch >
            <Route path="/" exact component={Home} />
            <Route exact path="/ourTours" component={OurTours} />
            <Route exact path="/planet/:id" component={Planet} />
            <Route exact path="/planet/registration/:id" component={Registration} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />

    </div>
  );
}

export default App;