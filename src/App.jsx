import Appbar from './Component/Appbar'
import About from './Component/About';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route  
}   
from 'react-router-dom'; 
import HomePage from './Pages/HomePage';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import SignOut from './Component/SignOut';
import Profile from './Component/Profile';
import ServicePage from './Pages/ServicePage';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { createTheme,colors , ThemeProvider } from '@mui/material';

const theme=createTheme({
  palette:{
    secondary:{
      main:colors.orange[500],
    },
    primary:{
      main:colors.blue[300],
    }
  }
})




export default function App() {
  return (
  <>
  <ThemeProvider theme={theme}>
  <Router>
  <Appbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<ServicePage/>}/>
    {/* <Route path='/ourClient' element={<OurClient/>}/> */}
    {/* <Route path='/ourTeam' element={<OurTeam/>}/> */}
    {/* <Route path='/certificates' element={<Certificates/>}/> */}
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signout' element={<SignOut/>}/> 
     <Route path='/profile' element={<Profile/>}/>
    {/* <Route path='/dashboard' element={<Deshbroad/>}/> */}
  </Routes>
  <Footer/>
  </Router>
  </ThemeProvider>
  </>
  );
  }
