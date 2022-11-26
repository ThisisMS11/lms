import './App.css';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from './Components/Navbar';
import MidContainer from './Components/Home/MidContainer';
import Footer from './Components/Footer';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import ResetPassword from './Components/Authentication/ResetPassword';
import Order from './Components/Orders/Order';
import UserState from './Components/context/Users/UserState';
import OrderSummary from './Components/Tables/OrderSummary';
import Profile from './Components/MyUser/Profile';
import MyOrders from './Components/Orders/MyOrders';
import Paynow from './Components/Payment/Paynow';
import ChangePassword from './Components/Authentication/ChangePassword';

function App() {
  return (
    <>
      <UserState>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route exact path='/' element={<MidContainer />}></Route>
            <Route exact path='/signup' element={<SignUp />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/reset' element={<ResetPassword />}></Route>
            <Route exact path='/order' element={<Order />}></Route>
            <Route exact path='/profile' element={<Profile />}></Route>
            <Route exact path='/about' element={<Profile />}></Route>
            <Route exact path='/myorder' element={<MyOrders />}></Route>
            <Route exact path='/paynow' element={<Paynow />}></Route>
            <Route exact path='/api/user/reset/:id/:token' element={<ChangePassword />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </UserState>
    </>
  );
}

export default App;
