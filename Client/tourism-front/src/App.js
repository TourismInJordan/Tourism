import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from './Components/Home';
import LoginForm from './Pages/Login';
import Navbar from './Components/Navbar';
import RegistrationForm from './Pages/Register';
import BlogsForm from './Pages/BlogsForm';
import BlogCard from './Components/BlogsCard';
import Footer from './Components/Footer';
import BlogsDetails from './Pages/BlogsDetails';

function App() {
  return (
   <>
    <BrowserRouter>
      <Navbar/>      
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='Login' element={<LoginForm/>} />
        <Route path='Register' element={<RegistrationForm/>} />
        <Route path='BlogsForm' element={<BlogsForm/>} />
        <Route path='BlogCard' element={<BlogCard/>} />
        <Route path='BlogsDetails' element={<BlogsDetails/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
   </>
  );
}

export default App;
