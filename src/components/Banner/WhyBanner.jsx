import React from 'react'

const WhyBanner = ({data}) => {
  return (
    <div className='whyBanner'>
   {
    data?.text.map((item)=>{
      return <div style={{margin:"2rem 0"}}>
        <h6>{item.heading}</h6>
        <p>{item?.text}</p>
        </div>
    })
   }
   
      

    </div>
  )
}

export default WhyBanner