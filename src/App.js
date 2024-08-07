
import React, {useState} from 'react';
import {BrowserRouter,Routes, Route,Navigate  } from 'react-router-dom';
import './App.scss';
import Modal from 'react-modal';
import Header from './components/Header'
import Home from './pages/home'
import About from './pages/about-us'
import Contact from './pages/contact'
import Footer from './components/Footer'
import Login from './components/Login-form'

Modal.setAppElement('#root');

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const validUsernames = ['sohelkhan302012@gmail.com', 'arbajkhan@gmail.com' ,'Arbajkhanwecode', 'Sohelkhanvolan'];
  const validPasswords = ['Admin@123'];
  const validMobiles = ['9079828177', '8107595781'];

  const handleLogin = (data) => {
    const isValid = validUsernames.includes(data.username) &&
                     validPasswords.includes(data.password) &&
                     validMobiles.includes(data.mobile);

    if (isValid) {
      setIsAuthenticated(true);
      return true;
    }else {
      setIsModalOpen(true);
      return false;
    }
    
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
 

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Error"
        className="Modal absolute top-[50%] left-[50%] -translate-[50%] p-4 rounded-3 w-[40%]"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal}>&#10005;</button>
        <h4>sorry data is note match</h4>
        <p>please enter the details</p>
        <p>{errorMessage}</p>
      </Modal>
      
    </>
  );
}
export default App;
