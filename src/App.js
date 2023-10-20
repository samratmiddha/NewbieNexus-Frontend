import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import ClubPage from './components/club';
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import ProfilePage from './components/profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Dashboard/>} />
      <Route path="/club" element={<ClubPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
