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
import Clients from './pages/clients';
import Designation from './pages/designation';
import EmployeeId from './pages/employee-id';
import Expancess from './pages/Expancess';
import PayInvoice from './pages/pay-invoice';
import Payslip from './pages/payslip';
import ProformaInvoice from './pages/proforma-invoice';
import TakeAttandance from './pages/take-attandance';
import Vendors from './pages/vendors';
import ViewAttandance from './pages/view-attandance';
import ViewEmployee from './pages/view-employee';
import ViewInvoice from './pages/view-invoice';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Authlayout from './layout/auth';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Adminlayout headername={"Dashboard"}> <Home /> </Adminlayout>} />
      <Route path="/setting" element={<Adminlayout headername={"settings page"}> <Settings /> </Adminlayout>} />
      <Route path="/clients" element={<Adminlayout headername={"Clients"}> <Clients /> </Adminlayout>} />
      <Route path="/designation" element={<Adminlayout headername={"Designation"}> < Designation/> </Adminlayout>} />
      <Route path="/employee-id" element={<Adminlayout headername={"Employee Id"}> < EmployeeId/> </Adminlayout>} />
      <Route path="/expancess" element={<Adminlayout headername={"Expancess"}> < Expancess/> </Adminlayout>} />
      <Route path="/pay-invoice" element={<Adminlayout headername={"Pay Invoice"}> <PayInvoice /> </Adminlayout>} />
      <Route path="/payslip" element={<Adminlayout headername={"Payslip"}> < Payslip/> </Adminlayout>} />
      <Route path="/proforma-invoice" element={<Adminlayout headername={"Proforma Invoice"}> <ProformaInvoice /> </Adminlayout>} />
      <Route path="/take-attandance" element={<Adminlayout headername={"Take Attandance"}> <TakeAttandance /> </Adminlayout>} />
      <Route path="/vendors" element={<Adminlayout headername={"Vendors"}> < Vendors/> </Adminlayout>} />
      <Route path="/view-attandance" element={<Adminlayout headername={"View Attandance"}> <ViewAttandance /> </Adminlayout>} />
      <Route path="/view-employee" element={<Adminlayout headername={"View Employee"}> < ViewEmployee/> </Adminlayout>} />
      <Route path="/view-invoice" element={<Adminlayout headername={"View Invoice"}> < ViewInvoice/> </Adminlayout>} />
      <Route path="/about" element={<Adminlayout headername={"About page"}><About/> </Adminlayout>} />
      <Route path="/sign-up" element={<Authlayout><Signup /></Authlayout>} />
      <Route path="/login" element={<Authlayout> <Login /></Authlayout>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
