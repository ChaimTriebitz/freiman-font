import { useEffect } from 'react';
import { useGlobalState } from '../hooks';
import { Card, RotatingText, Search } from '../cmps'
import { Link } from 'react-router-dom';
import { imgs } from '../assets/imgs';

export const Home = () => {
   const { loggedInUser } = useGlobalState()


   useEffect(() => {
      // else login(tok)
   }, [])

   // const ai = async () => {
   //    axios.post('http://localhost:5000/api/ai', { question: 'who was the first president of the united states of America' })
   // }


   return (
      <div className='page home'>
         <div className="banner home">

            <h1>Experienced Real Estate Lawyer in</h1>
            <span className='isreal'>Israel</span>
            <div className='card2'>
               <img src={imgs?.office} alt="img" />
            </div>
            <h2>Netanel Fraiman</h2>
            <div className='rotating-text-container' style={{ display: "block" }}>
               <RotatingText
                  staticText={'Providing expert legal advice in :'}
                  rotatingTexts={["Property Deals", "Tax Planning", "Financial Plans"]}
               />
            </div>
            <Link className='btn' to='/contact'>Contact us</Link>
         </div>
         {/* <Card img={imgs?.office} /> */}
         {/* <Search /> */}
         {/* <button onClick={ai}>ai</button> */}
         {/* <CreatePost /> */}
      </div>
   )
}
