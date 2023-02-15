import React from 'react'
import { motion } from 'framer-motion'

// styles
import './Welcome.scss'
const Welcome = () => {
  return (
    <div className="content_wrapper welcome">
    <div className="left_side ">
      <div className="welcome">
        <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        >Welcome</motion.h2>
      <div className="text">
        <h4>You found US!</h4>
          <p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda, animi blanditiis magnam ab qui dicta eligendi similique itaque nemo obcaecati, mollitia consequatur. Dolorum eum magnam temporibus ea incidunt, repellendus at, voluptatum exercitationem qui vitae assumenda ex quos necessitatibus obcaecati?
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis velit ad eveniet praesentium, laboriosam quidem eligendi, numquam, esse repellat animi magni corporis nemo dolore in debitis natus molestiae! Accusantium debitis libero aspernatur vero, doloremque obcaecati quisquam sapiente hic possimus, aliquid cumque voluptatibus corrupti. Aliquid nostrum natus totam numquam hic est soluta modi tempore quaerat quidem voluptatem, facilis laudantium ipsam. Voluptate ratione nulla labore! Placeat, accusamus. Pariatur maiores temporibus veniam accusantium fugit! Tempora excepturi fugit dolores. Eveniet, saepe! Nihil laudantium est voluptate dolorum facere aliquam esse. Dolor dolores reiciendis sapiente enim ad earum exercitationem libero necessitatibus pariatur eum, corporis ullam nulla?
          </p>
      </div>
      
      </div>
    </div>
    <div className="right_side">
    <div className='news'>
        <motion.h2
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6, delay: 1.4 }}
        >NEWS</motion.h2>
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
              <p className='brodtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
          </div>
          <div className="news_item">
              <p className='brodtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
          </div>
          <div className="news_item">
              <p className='brodtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aut deserunt ipsa libero a totam quis, corrupti dolores id.</p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Welcome