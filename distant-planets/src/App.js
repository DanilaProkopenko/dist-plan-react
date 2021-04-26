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

      {/* как я понял, все нужные ссылки я помещаю вот сюда, и тут же прописываю пути */}
        <Switch >
          <Route exact path="/" component={Home} />
          {/* сейчас у меня проблемы вот в этом компоненте ниже, в нем я прописал link, и соответсвенно, как я думаю, этот link находится внетри router */}
          <Route exact path="/ourTours" component={OurTours} />
          <Route exact path="/contact" component={Contact} />
          {/* ссылка на карточку планеты по id */}
          <Route exact path="/planet/:id" component={Planet} />
          <Route exact path="/planet/registration" component={Registration} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;