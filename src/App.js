import Login from './component/login'
import Signup from './component/sign-up'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="summa">
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
