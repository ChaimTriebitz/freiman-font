import { Route, Routes } from 'react-router-dom';
import { NavBar, Dialogs } from './cmps';
import { Home, About, Services, Resources, Contact } from './pages';
function App() {

   document.title = 'Fraiman - law form'

   return (
      <div className="App">
         <Dialogs />
         <NavBar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/contact' element={<Contact />} />
         </Routes>
      </div>
   );
}

export default App;
