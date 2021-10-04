import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nopage from './Components/Nopage/Nopage';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Courdes from './Components/Courses/Courdes';



function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>


          <Route path="/home">
            <Home></Home>
          </Route>



          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/service">
            <Courdes></Courdes>
          </Route>

          <Route>
            <Nopage></Nopage>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
