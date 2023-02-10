import { useState, useEffect } from 'react';
import phase1 from './assets/images/0.png';
import phase2 from './assets/images/1.png';
import phase3 from './assets/images/2.png';
import phase4 from './assets/images/3.png';
import phase5 from './assets/images/4.png';
import phase6 from './assets/images/5.png';
import phase7 from './assets/images/6.png';
import phase8 from './assets/images/7.png';
import phase9 from './assets/images/8.png';
import phase10 from './assets/images/9.png';
import phase11 from './assets/images/10.png';
import phase12 from './assets/images/11.png';
import phase13 from './assets/images/12.png';
import phase14 from './assets/images/13.png';
import phase15 from './assets/images/14.png';
import phase16 from './assets/images/15.png';
import { motion } from "framer-motion"
import './App.css';


const winWidth = window.innerWidth;

const startDate = new Date(2023, 1, 5);

const lunarMonthInMilliseconds = 29.53 * 24 * 60 * 60 * 1000;

function getNextFullMoon(startDate) {
  const fullMoon = new Date(startDate.getTime() + lunarMonthInMilliseconds);
  return fullMoon;
}

const nextFullMoon = getNextFullMoon(startDate);
console.log(nextFullMoon);

console.log(winWidth)

const imgArray = [
  phase1,
  phase2,
  phase3,
  phase4,
  phase5,
  phase6,
  phase7,
  phase8,
  phase9,
  phase10,
  phase12,
  phase13,
  phase14,
  phase15,
  phase16,
];

console.log(imgArray[0])

const MoonPath = () => {


  return (
    <div>
      <svg className="moonpath" width={winWidth} viewBox={`0 0 ${winWidth} 159`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M-8.00007 158.5C-8.00007 158.5 438.312 2.68291 720 1.5C1017.31 0.25147 1437.5 158.5 1437.5 158.5"
          fill="transparent"
          strokeWidth="1"
          stroke="rgba(255, 255, 255, 0.69)"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
     </div>
   )
}

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

function App() {
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (currentIdx === imgArray.length - 1) {
        setCurrentIdx(0)
      } else {
       
        setCurrentIdx(curr => curr + 1)
      }
    }, 3000)
  }, [currentIdx])
  

  return (
    <div className="App">
      <h1>Moon calendar</h1>
      <div className="moonphase">
        {
          <img src={imgArray[currentIdx]} alt="moon" />
        }
        
      </div>
      <div className="container">
        <MoonPath>        
        </MoonPath>

        <motion.div
        className="moon"
        initial={{ offsetDistance: "0%", scale: 1 }}
        animate={{ offsetDistance: "100%", scale: 1 }}
        transition={transition}
      />
    </div>
     
    </div>
  )
}

export default App
