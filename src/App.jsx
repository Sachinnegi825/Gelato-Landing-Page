import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contact from "../src/assets/footer_contact.svg"
import { IoMdInformationCircle } from 'react-icons/io'
import BannerLayout from './pages/BannerLayout'

const App = () => {
  return (
    <>
        <div style={{background:"black",padding:"0.5rem"}}>
        
          <p className='offer_para'>
            FREE SHIPPING for orders over $300. Order today{' '}
            <IoMdInformationCircle title="full terms and conditions apply" />
          </p>
     
        </div>
       
      
      <Header/>
      <BannerLayout/>
      <Footer/>
      <button className='fixed-btn'><img src={Contact} alt="img" width={20} height={20} />Contact Us</button>
    </>
  )
}

export default App