import { imgs } from '../assets/imgs';
import { RotatingText } from '../cmps'
import { Link } from 'react-router-dom';

export const Home = () => {


   return (
      <div className='page home'>
         <div className="banner home">
            <h1>Experienced Real Estate Lawyer in</h1>
            <span className='isreal'>Israel</span>
            <h2>Netanel Fraiman</h2>
            <div className='rotating-text-container' style={{ display: "block" }}>
               <RotatingText
                  staticText={'Providing expert legal advice in :'}
                  rotatingTexts={["Property Deals", "Tax Planning", "Financial Plans"]}
               />
            </div>
            <Link className='btn' to='/contact'>Contact us</Link>
         </div>
         <div className="info">
            <img src={imgs.jerusalem.j1} alt="" />
            <p>
               Netanel Fraimann is a real-estate lawyer, advising clients on purchase, sale, and rental transactions, as well as tax-related real estate issues.
            </p>
         </div>
      </div>
   )
}
