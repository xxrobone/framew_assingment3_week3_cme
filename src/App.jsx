import { useState, useEffect } from 'react';
/* import Moon from './pages/moon/Moon'; */
import BG from './assets/images/bg_main.png'

// styles
import './App.scss'

function App() {
  const [currentIdx, setCurrentIdx] = useState(0)
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
      <img src={BG} alt="" className='bg_main' />
      <div className="content_wrapper main">
        <div className="left_side ">
          <div className="members">

          <h2>Members</h2>
          <div className="member">
            <h4>name</h4>
            <p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?</p>
          </div>
          <div className="member">
            <h4>name</h4>
            <p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?</p>
          </div>
          <div className="member">
            <h4>name</h4>
            <p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?</p>
          </div>
          <div className="member">
            <h4>name</h4>
            <p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?</p>
          </div>
          </div>
        </div>
        <div className="right_side">
        <div className='news'>
          <h2>NEWS</h2>
          <div className="news_wrapper">
              <div className="news_item">
                  <p className='brodtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
              </div>
              <div className="news_item">
                  <p className='brodtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
              </div>
              <div className="news_item">
                  <p className='brodtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
              </div>
              <div className="news_item">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
              </div>
              <div className="news_item">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
              </div>
              <div className="news_item">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
