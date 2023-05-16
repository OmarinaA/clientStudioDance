import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import Modal from 'react-modal';
import Registration from '../Registration';
import Login from '../Login';
import { Button } from 'reactstrap';
import AuthService from '../services/Auth.service';
import ProfilePage from '../ProfilePage';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [toggle, setToggle] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);


  const tagle=(e) =>{
    setToggle(!toggle)
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(user)
  }, [localStorage.getItem('user')])

  return (
    <header>
      <nav className="navbar">
      <div className="navbar__left">
        <ul className="navbar__menu">
          <li><a href="/Directions">Направления</a></li>
          <li><a href="/Teachers">Преподаватели</a></li>
          <li><a href="/Abonements">Абонементы</a></li>
        </ul>
      </div>
      <div className="navbar__center">
        <a href="/" className="navbar__logo"> <img src={require('../img/logo.png')} alt="logo" /></a>
      </div>
      {!localStorage.getItem('user')?
      (
        <>
        <Registration/>
      <Login/> 

        </>
       
      ): (<>
      {user.roles[0] === 'ROLE_ADMIN' ? <Button href='/Admin'>Админ-панель</Button> : null}
      <Button href='/ProfilePage'>Профиль</Button>
       <Button onClick={(e)=>{AuthService.logout()}} href='/'>Выйти</Button>

      </>

      )}
      
      {/* <div className="navbar__right">
      
              <button className="btnH" onClick={tagle()}>Войти</button>
              <button className="btnH" style={{marginLeft:'10px'}} onClick={tagle()}>Зарегистрироваться</button>
              <Modal 
  isOpen={loginModalIsOpen} 
  onRequestClose={closeLoginModal} 
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      width: '800px',
      height: '400px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#282828',
      color: 'white',
      padding: '20px',
      border: '2px solid white',
      borderRadius: '10px'
    }
  }}>
  <h2 style={{marginBottom: '40px'}}>Аутентификация</h2>
  <Login />
  <button className="btn" style={{marginLeft:'10px'}} onClick={openRegisterModal}>
    Зарегистрироваться
  </button>
</Modal>
  <Modal 
  isOpen={tagle()} 
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      width: '800px',
      height: '600px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#282828',
      color: 'white',
      padding: '20px',
      border: '2px solid white',
      borderRadius: '10px'
    }}}>
      <h2 style={{marginBottom: '40px'}}>Регистрация</h2>
      <Registration />
      <button className="btn" style={{marginLeft:'10px'}}onClick={tagle()}>Войти</button>
      </Modal>
      </div> */}
    </nav>
    </header>
  );
};

export default Header;
