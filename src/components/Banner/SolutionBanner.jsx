import React from 'react'

const SolutionBanner = ({data}) => {
  return (
    <div className='SolutionBanner'>
   <h6>{data.text[0]}</h6>
   <h1 className='heading'>{data?.title}</h1>
   <h3>{data?.text[1]}</h3>
   <button className='button'>{data?.buttonText}</button>
    
       
 
     </div>
  )
}

export default SolutionBanner