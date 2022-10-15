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
function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<MidContainer />}></Route>
        </Routes>

        {/* <div className='bg-banner'>hello mr.duniya</div> */}

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
