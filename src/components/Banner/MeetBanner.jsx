import React from 'react'

const MeetBanner = ({data}) => {
  return (
    <div className='SolutionBanner'>
    <h1 className='heading'>{data?.title}</h1>
    <p className='para'>{data?.text[0]}</p>
    <button className='button'>{data?.buttonText}</button>
     
        
  
      </div>
  )
}

export default MeetBanner