import './App.css';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from './Components/Navbar';
import MidContainer from './Components/MidContainer';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ResetPassword from './Components/ResetPassword';
import Order from './Components/Order';
function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route exact path='/' element={<MidContainer />}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route exact path='/reset' element={<ResetPassword/>}></Route>
          <Route exact path='/order' element={<Order/>}></Route>
        </Routes>

        {/* <div className='bg-banner'>hello mr.duniya</div> */}

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
