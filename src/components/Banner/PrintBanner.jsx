import React from 'react'

const PrintBanner = ({data}) => {
 
  return (
    <div>
     <h1 className='heading'>{data.title}</h1>
   
          <h6>{data?.text[0]}</h6>
          <p>{data?.text[1]}</p> 
     <div className='button-wrapper'> 
        <button className='button'>{data?.buttonText[0]}</button>
        <button className='btn'>{data?.buttonText[1]}</button>
        </div>
        <img src={data?.img} alt="img" width={120} style={{marginTop:"2rem"}}/>

    </div>
  )
}

export default PrintBanner