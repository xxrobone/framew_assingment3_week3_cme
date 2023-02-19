import { useState, useEffect } from 'react';
import {Routes, Route,  useLocation } from 'react-router-dom'
import {motion} from 'framer-motion'
import Members from './pages/members/Members';
import NavMobile from './components/nav/NavMobile';
import Hamburger from './components/hamburger/Hamburger';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import BannerSideScroll from './components/bannersidescroll/BannerSideScroll';
import Welcome from './pages/welcome/Welcome';
import MemberDetails from './pages/members/MemberDetails';

// styles
import './App.scss'
import MediaFiles from './pages/mediafiles/MediaFiles';




function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setActive(false); // Close the navigation panel
  }, [pathname]);
/* 
  useEffect(() => {
    setTimeout(() => {
      if (currentIdx === imgArray.length - 1) {
        setCurrentIdx(0)
      } else {
       
        setCurrentIdx(curr => curr + 1)
      }
    }, 200)
  }, [currentIdx]) */
  

  return (
    <div className="App">
      <Header />
      <Hamburger active={active} setActive={setActive}/>
      <Nav />
      <NavMobile active={active} />
      <BannerSideScroll />
      <div className='bg_white'></div>      
      
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/members" element={<Members />} />
      <Route path="/members/:id" element={<MemberDetails />} />
      <Route path="/media" element={<MediaFiles />} />
      </Routes> 
      <Footer />
    </div>
  )
}

export default App


