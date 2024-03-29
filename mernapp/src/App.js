
import './App.css';
import Home from './sceerns/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './sceerns/Login';
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './sceerns/Signup.js';
import { CartProvider } from './components/ContextReducer.js';



function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/creatuser" element={<Signup/>} />
      </Routes>


    </div>
    </Router>
    </CartProvider>
  );
}
export default App;
 