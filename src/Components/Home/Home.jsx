import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <h1 className='header'>developer</h1>
      <motion.h2 
      initial={{
        marginLeft: "-90px" , 
        opacity: 0.1,
      }}
      animate={{
        marginLeft: "90px",
        transition: 0.9 ,
        opacity: 1
      }}
      
      className='intro'>
        I am , 
      </motion.h2>
      <h1 className='intro2'>
      REACT JS FRONTEND DEVELOPER <br />
        AND FIGMA DESIGNER .
      </h1>

      <p className='name'>
        My name is SANDESH BK 
      </p>
      
    </div>
  )
}

export default Home