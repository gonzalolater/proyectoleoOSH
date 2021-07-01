import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';
import Mensajes from './components/Mensajes';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/contacto' component={Contacto}></Route>
      <Route exact path='/servicios' component={Servicios}></Route>
      <Route exact path='/mensajes' component={Mensajes}></Route>
      </Switch>
    </Router>
  );
}

export default App;