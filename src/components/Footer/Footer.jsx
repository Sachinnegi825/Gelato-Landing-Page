import "./footer.css";
import Img1 from "../../assets/footer_logo.svg"
import Insta from "../../assets/insta.svg"
import Fb from "../../assets/fb.svg"
import Link from "../../assets/link.svg"
import Youtube from "../../assets/youtube.svg"
import Appstore from "../../assets/appstore.svg"
import Google from "../../assets/googleplay.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
              <div className="footer-top">
                <img src={Img1} alt="" />
                 <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                  <p>Find Galato in:</p>
                  <div style={{display:"flex",gap:"20px",alignItems:"baseline"}}>
                    <img src={Insta} alt="img" width={25}/>
                    <img src={Fb} alt="img"  width={20}/>
                    <img src={Link} alt="img" width={30}/>
                    <img src={Youtube} alt="img" width={30}/>
                  </div>
                 </div>
              </div>

              <div className="footer-middle">
                <div className="footer-middle-box">
                  <p>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
                  <button className="btn">Get started</button>

                  <h3>Get the app</h3>
                  <img src={Appstore} alt="img"  width={100}/>
                  <img src={Google} alt="img"  width={100}/>
                </div>

                <div  className="footer-middle-box">
                  <h3>Print on demand</h3>
                  <ul className="list">
                    <li>What is print on demand?</li>
                    <li>Product catalog</li>
                    <li>Shipping and delivery</li>
                    <li>Pro sellers</li>
                    <li>Sustainability</li>
                  </ul>
                </div>

                <div  className="footer-middle-box">
                  <h3>Integrations</h3>
                  <ul className="list">
                    <li>What is print on demand?</li>
                    <li>Product catalog</li>
                    <li>Shipping and delivery</li>
                    <li>Pro sellers</li>
                    <li>Sustainability</li>
                  </ul>
                </div>
                <div  className="footer-middle-box">
                  <h3>Company</h3>
                  <ul className="list">
                    <li>What is print on demand?</li>
                    <li>Product catalog</li>
                    <li>Shipping and delivery</li>
                    <li>Pro sellers</li>
                    <li>Sustainability</li>
                  </ul>
                </div>
              </div>
      </div>
    </footer>
  )
}

export default Footer