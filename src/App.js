import {Route,Routes} from 'react-router-dom';
import './App.css';
// import Register from '../src/components/LearnerComponent/Register';
import Navbar from '..//src/components/LearnerComponent/Navbar';
import NavbarView from './View/NavbarView';
import Course from './components/LearnerComponent/Course';
import RegisterView from './View/RegisterView';
import UpdateUserProfileView from './View/UpdateUserProfileView';
import PasswordChange from './components/PasswordChange';
import ProfileController from './components/LearnerComponent/ProfileController';





function App() {
  
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<RegisterView/>}/>
        <Route path='/UpdateUserProfile' element={<UpdateUserProfileView/>}/>
        <Route path='/PasswordChange' element={<PasswordChange/>}/>
        <Route path ='/ProfileController' element={<ProfileController/>}/>
        <Route path="/Navbar" element={<NavbarView/>}/>
        <Route path="/Course" element={<Course/>}/>
        
        
        </Routes>      
    </div>
  );
}

export default App;
