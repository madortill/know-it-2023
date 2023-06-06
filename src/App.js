import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import Opening from './components/opening/opening.component';
import RegisterFormCard from './components/register-form/register-form-card.component';
import BottomBanner from "./components/bottom-banner/bottomBanner.component";
import Talks from "./components/talks/Talks.component";
import BlockWebsite from "./components/blockWebsite/BlockWebsite.component";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const App = () =>{


  const event_date = new Date('2022-11-22T08:00:00');
  const dateTimeAfterNumDays = event_date;  
  const navigate = useNavigate();

  useEffect (() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  }, []);

  const checkScreenSize = () => {
    if (window.innerWidth < 950) {
      return true;
    } 
    navigate('/blocked');
    return false;
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <BottomBanner/>
      {
        <Routes>
          <Route path="*" element={<Opening targetDate={dateTimeAfterNumDays}/>} />
          {/* <Route path="/register" element={<RegisterFormCard />} /> */}
          <Route path="/talks" element={<Talks />} />
          <Route path="/blocked" element={<BlockWebsite />} />
        </Routes>
      }
    </div>
  );
}

export default App;