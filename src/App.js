import Login from './pages/login'
import Signup from './pages/sign-up'
import Home from './pages/home'
import { Link } from "react-router-dom";
import Adminlayout from './layout/admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';
import './style/custom/layout.css';
import './style/custom/address.css';
import './style/custom/attantance.css';
import './style/custom/employee.css';
import './style/custom/enniyal.css';
import './style/custom/expances.css';
import './style/custom/invoice.css';
import './style/custom/login.css';
import './style/custom/riot-font.css';
import './style/custom/settings.css';
import './style/custom/styles.css';
import About from './pages/about';
import Settings from './pages/setting';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Adminlayout headername={"Home page"}> <Home /> </Adminlayout>} />
      <Route path="/settings" element={<Adminlayout headername={"settings page"}> <Settings /> </Adminlayout>} />

      <Route path="/about" element={<Adminlayout headername={"About page"}><About/> </Adminlayout>} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
