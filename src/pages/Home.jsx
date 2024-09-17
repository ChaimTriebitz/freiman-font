import { useEffect } from 'react';
import { useGlobalState } from '../hooks';
import { Search } from '../cmps'

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
            <h1>Expert Real Estate Legal Guidance by</h1> 
            <h2>Netanel Fraiman</h2> 
            <h3>Your Trusted Partner in Property Transactions and Tax Solutions</h3>
         </div>
         {/* <Search /> */}
         {/* <button onClick={ai}>ai</button> */}
         {/* <CreatePost /> */}
      </div>
   )
}
