import React from 'react'
import { svgs } from '../assets/svgs'

export const Services = () => {
   return (
      <div className='page services'>
         <div className="banner">
         </div>
         <div className="cards">
            <div className="card">
               <div className="inner">
                  <div className="front">
                     <h1>Real Estate Transactions</h1>
                     {svgs.handshake}
                  </div>
                  <div className="back">
                     <p>Expert legal guidance for property purchases and sales</p>
                  </div>
               </div>
            </div>
            <div className="card">
               <div className="inner">
                  <div className="front">
                     <h1>Tax Consultation</h1>
                     {svgs.calculator}
                  </div>
                  <div className="back">
                     <p>Comprehensive advice on real estate tax matters</p>
                  </div>
               </div>
            </div>
            <div className="card">
               <div className="inner">
                  <div className="front">
                     {svgs.graph}
                     <h1>Investment Support</h1>
                  </div>
                  <div className="back">
                     <p>Tailored assistance for real estate investments in Israel</p>
                  </div>
               </div>
            </div>
            <div className="card">
               <div className="inner">
                  <div className="front">
                     {svgs.document}
                     <h1>Contract Review</h1>
                  </div>
                  <div className="back">
                     <p>Detailed analysis and negotiation of purchase agreements</p>
                  </div>
               </div>
            </div>
            <div className="card">
               <div className="inner">
                  <div className="front">
                     {svgs.shield}
                     <h1>Client Advocacy</h1>
                  </div>
                  <div className="back">
                     <p>Dedicated representation to protect your interests</p>
                  </div>
               </div>
            </div>
            <div className="card">
               <div className="inner">
                  <div className="front">
                     {svgs.heart}
                     <h1>Personalized Service</h1>
                  </div>
                  <div className="back">
                     <p>Caring, client-focused support throughout the process</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
