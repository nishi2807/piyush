import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router,Switch,Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (

      <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
       </Routes>
       </BrowserRouter>
      </div>


  );
}


export default App;
