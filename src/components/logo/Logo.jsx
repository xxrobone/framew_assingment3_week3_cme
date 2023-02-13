import React from 'react'
import { motion } from 'framer-motion'
// styles 
import './logo.scss'

const Logo = () => {
  return (
      <div className='logo'>
          <motion.h1
              initial={{y: -300, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 1}}
          >
             Mass
          </motion.h1>
          <motion.h1
           initial={{x: -500, opacity: 0}}
           animate={{x: 0, opacity: 1}}
           transition={{duration: 1, delay: 0.6}}
          >
              Destruction
          </motion.h1>
    </div>
  )
}

export default Logo