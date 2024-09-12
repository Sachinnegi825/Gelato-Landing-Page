import React from 'react';
import './BannerSection.css';
import PrintBanner from './PrintBanner';
import WhyBanner from './WhyBanner';
import SolutionBanner from './SolutionBanner';
import ConnectBanner from './ConnectBanner';
import MeetBanner from './MeetBanner';
import WebsiteData from './WebsiteData';

function BannerSection({id,heading, image, imagePosition,bg,body }) {
  const isImageLeft = imagePosition === 'left';
  console.log("img",image)

  return (
    <div style={{background:bg?bg:"white"}}>
        {
              heading &&  <h1 className='heading-main'>{heading}</h1>
            }
           
           <div className={`BannerSection ${isImageLeft ? 'left-image' : 'right-image'}`}>
          
      <div className="BannerSection-image banner-part">
        <img src={image} alt="img" />
      </div>
      <div className="BannerSection-content banner-part">
        {
          id==1 && <PrintBanner data={body}/>
        }
        {
          id==2 && <WhyBanner data={body}/>
        }
         {
          id==3 && <SolutionBanner data={body}/>
        }
         {
          id==4 && <ConnectBanner data={body}/>
        }
         {
          id==5 && <MeetBanner data={body}/>
        }
       
      </div>
    </div>
    {id==1 && <WebsiteData/>}
    </div>
   
  );
}

export default BannerSection;
