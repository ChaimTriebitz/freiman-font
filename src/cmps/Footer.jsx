import { imgs } from '../assets/imgs'


export const Footer = () => {
   return (
      <footer className='footer'>
         <img src={imgs.logo} alt="" />
         <div className="social-media">
            <h1>Social Media</h1>
            <div className="icons"></div>
         </div>
      </footer>
   )
}
