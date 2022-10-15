import './App.css';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from './Components/Navbar';
import MidContainer from './Components/MidContainer';
function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<MidContainer/>}></Route>
        </Routes>

      {/* <div className='bg-banner'>hello mr.duniya</div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
