import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Registration } from './Components/Registration';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Payment } from './Components/Payment';
import { Faq } from './Components/Faq';
import { About } from './Components/About';
import  Feedback  from './Components/Feedback';
import { Contact } from './Components/Contact';
import { AdminContact } from './Components/AdminContact';
import { PostJob } from './Components/PostJob';
import { AdminJob } from './Components/AdminJob';
import { AdminLogin } from './Components/AdminLogin';
import { AdminHome } from './Components/AdminHome';
import { AdminAllUser } from './Components/AdminAllUser';
import { AllAdmins } from './Components/AllAdmins';
import { AdminFeedback } from './Components/AdminFeedback';
import { EmployeeLogin } from './Components/EmployeeLogin';
import { EmployerHome } from './Components/EmployerHome';
import { UpdateProfile } from './Components/UpdateProfile';
import { SearchJob } from './Components/SearchJob';
import { EmployerJob } from './Components/EmployerJob';
import { EmployeeJob } from './Components/EmployeeJob';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/reg" element={<Registration></Registration>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/payment" element={<Payment></Payment>}></Route>
          <Route path="/faq" element={<Faq></Faq>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/feedback" element={<Feedback></Feedback>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/admincontact" element={<AdminContact></AdminContact>}></Route>
          <Route path="/postjob" element={<PostJob></PostJob>}></Route>
          <Route path="/adminjob" element={<AdminJob></AdminJob>}></Route>
          <Route path="/employer" element={<EmployerHome></EmployerHome>}></Route>
          <Route path="/adminlog" element={<AdminLogin></AdminLogin>}></Route>
          <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
          <Route path="/adminalluser" element={<AdminAllUser></AdminAllUser>}></Route>
          <Route path="/alladmins" element={<AllAdmins></AllAdmins>}></Route>
          <Route path="/adminfeedback" element={<AdminFeedback></AdminFeedback>}></Route>
          <Route path="/employeelogin" element={<EmployeeLogin></EmployeeLogin>}></Route>
          <Route path="/updateprofile" element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path="/searchjob" element={<SearchJob></SearchJob>}></Route>
          <Route path="/employerjob" element={<EmployerJob></EmployerJob>}></Route>
          <Route path="/employeejob" element={<EmployeeJob></EmployeeJob>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
