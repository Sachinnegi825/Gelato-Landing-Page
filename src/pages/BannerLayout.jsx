import React from "react";
import BannerSection from "../components/Banner/BannerSection";
import Img1 from "../assets/banner_1.webp";
import Img2 from "../assets/banner_2.webp";
import Img3 from "../assets/banner_3.gif";
import Img4 from "../assets/banner_4.gif";
import Img5 from "../assets/banner_5.webp";
import Img6 from "../assets/shopify_monotone_black.svg";


const sections = [
  {
    id:1,
    heading:null,
    image:Img1,
    imagePosition: "right",  
    bg:null,
    body:{
      title:"Print on demand for your ecommerce business",
      text: {0:"Sign up for free and only pay for what you sell",1:"Turn your passion into profit with the world's largest print on demand network."},
      img:Img6,
      buttonText:["Get started for free","See our products"]
    }
    
  
  },
  {
    id:2,
    heading:"Why choose Gelato",
    image:Img2,
    imagePosition: "left",
    bg:null,
    body:{
      title:null,
      text:[{
        heading:"▻ World's largest print-on-demand network",
        text:"140+ print partners in 32 countries. Gelato is a truly global service."
     },
     {
       heading:"▻ 100% free editing tools",
       text:"Create your custom products using our suite of free tools."
    },
    {
     heading:"▻ High-quality products",
     text:"We partner with the world's leading brands to ensure the best quality products."
  },
  {
   heading:"▻ High-quality products",
   text:"We partner with the world's leading brands to ensure the best quality products."
 },
 {
   heading:"▻ High-quality products",
   text:"We partner with the world's leading brands to ensure the best quality products."
 }
   ],
   
   buttonText: null,
    }
      

  
  },
  {
    id:3,
    heading:null,
    image:Img3,
    imagePosition: "right",
       bg:"#f3f0e4",
       body:{
        title:"Accelerate business growth with innovative design tools and apps",
        text:["For print on demand sellers","See how our cutting-edge solutions can help you reach new customers and maximize your profits."],
        buttonText: "Get started",
       }

  },
  {
    id:4,
    heading:null,
    image:Img4,
    imagePosition: "left",
     bg:null,
     body:{
      title:"GelatoConnect",
      text:["For print producers","Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry"],
      buttonText: "Learn more",
     }   
  },
  {
    id:5,
    heading:null,
    image:Img5,
    imagePosition: "right",
    bg:"#f3f0e4",
    body:{
     title:"Meet GelatoConnect at Printing United",
     text:["Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours."],
      buttonText: "Book a meeting",
    }
    
       
  },
];


function BannerLayout() {
  return (
    <div className="LandingPage">
      {sections.map((section, index) => (
        <BannerSection
         key={index}
          id={section.id}
          heading={section.heading}
          image={section.image}
          imagePosition={section.imagePosition}
          bg={section.bg}
          body={section.body}
        />
      ))}
    </div>
  );
}

export default BannerLayout;
