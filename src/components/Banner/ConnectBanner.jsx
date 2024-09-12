import React from 'react'

const ConnectBanner = ({data}) => {
  return (
    <div className='ConnectBanner'>
    <h6>{data.text[0]}</h6>
    <h1 className='heading'>{data?.title}</h1>
    <h3>{data?.text[1]}</h3>
    <button className='button'>{data?.buttonText}</button>
     
        
  
      </div>
  )
}

export default ConnectBanner