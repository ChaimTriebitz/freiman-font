import { imgs } from '../assets/imgs'
import { svgs } from '../assets/svgs'


export const Footer = () => {
   return (
      <footer className='footer'>
         <p>For more information</p>
         <b>contact Attorney Netanel Fraiman</b>
         <div className='contact-us'>
            <a className="item"
               href={`tel:972544204235`}
               title={'call me'}
            >
               {svgs.phone}
               <p>972-54-420-4235</p>
               <span>|</span>
            </a>
            <a className="item"
               href="https://wa.me/972544204235"
               title={'message me'}
               target='_blank'
            >
               {svgs.whatsapp}
               <p>+972 544 978899</p>
               <span>|</span>
            </a>
            <a
               className="item"
               href={`mailto:Office@fraiman-law.com`}
               title={'mail me'}
            >
               {svgs.email}
               <p>Office@fraiman-law.com</p>
            </a>
         </div>
      </footer>
   )
}
