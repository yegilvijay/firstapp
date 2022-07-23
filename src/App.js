import Login from './pages/login'
import Signup from './pages/sign-up'
import Home from './pages/home'
import { Link } from "react-router-dom";
import Adminlayout from './layout/admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Adminlayout><Home /> </Adminlayout>} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
