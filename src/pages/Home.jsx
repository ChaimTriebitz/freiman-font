import { imgs } from '../assets/imgs';
import { svgs } from '../assets/svgs';
import { RotatingText } from '../cmps'
import { Link } from 'react-router-dom';

export const Home = () => {


   return (
      <div className='page home'>
         <div className="banner home">
            <h1>Experienced Real Estate Lawyer in</h1>
            <span className='isreal'>
               {/* {svgs.israel} */}
               Israel
            </span>

            <h2>Netanel Fraiman</h2>
            <div className='rotating-text-container'>
               <RotatingText
                  staticText={'Providing expert legal advice in :'}
                  rotatingTexts={["Property Deals", "Tax Planning", "Financial Plans"]}
               />
            </div>
            <Link className='btn' to='/services'>Services</Link>
         </div>
         <div className="info">
            <img src={imgs.jerusalem.j6} alt="" />
            <div>
               <p>
                  Netanel Fraimann is a real-estate lawyer, advising clients on purchase, sale, and rental transactions, as well as tax-related real estate issues.
               </p>
               {/* {svgs.israel} */}
            </div>

         </div>
      </div>
   )
}
