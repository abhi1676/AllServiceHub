import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Componenets/Login';
import { Registration } from './Componenets/Registration';
import { Navbar } from './Componenets/Navbar';
import { Footer } from './Componenets/Footer';
import { Home } from './Componenets/Home';
import { Payment } from './Componenets/Payment';
import { Faq } from './Componenets/Faq';
import { About } from './Componenets/About';
import  Feedback  from './Componenets/Feedback';
import { Contact } from './Componenets/Contact';
import { AdminContact } from './Componenets/AdminContact';
import { PostJob } from './Componenets/PostJob';
import { AdminJob } from './Componenets/AdminJob';
import { AdminLogin } from './Componenets/AdminLogin';
import { AdminHome } from './Componenets/AdminHome';
import { AdminAllUser } from './Componenets/AdminAllUser';
import { AllAdmins } from './Componenets/AllAdmins';
import { AdminFeedback } from './Componenets/AdminFeedback';
import { EmployeeLogin } from './Componenets/EmployeeLogin';
import { EmployerHome } from './Componenets/EmployerHome';
import { UpdateProfile } from './Componenets/UpdateProfile';
import { SearchJob } from './Componenets/SearchJob';
import { EmployerJob } from './Componenets/EmployerJob';
import { EmployeeJob } from './Componenets/EmployeeJob';



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
