import React, { useState } from 'react'
import { Label, Form, FormGroup, Button, Input } from 'reactstrap'
import AuthService from './services/Auth.service';
import {Modal, ModalHeader} from 'reactstrap';


const Login = () => {
  // Создание переменных с хуком useState для отслеживания изменения полей ввода
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  // Создание переменных с хуком useState для отслеживания ввода данных( если ничего не ввели, то состояние менется)
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [toggle, setToggle] = useState(false);


  const tagle=() =>{
    setToggle(!toggle)
  }

  // Создаем функцию для авторизации
  const onLogin = async (e) => {
    setUsernameInvalid(false);
    setPasswordInvalid(false);
    let isValid = true;
    // Проверяем валидность введенных данных
    if (!password || password.length < 6) {
      setPasswordInvalid(true);
      isValid = false;
    }
    if (!isValid) {
      alert('Пожалуйста, введите корректные данные');
      return;
    }
    console.log(username,password)
    // Создаем запрос к серверу для авторизации с обработкой полученных данных
    await AuthService.login(username, password)
      .then((response) => {
        console.log(response);
        if (response.data.status !== 200) {
          console.log(response);
          alert(response.message);
        } else {
          AuthService.getCurrentUser()
          alert(response.message);
          setUsername('');
          setPassword('');

          tagle()
        }
      })
      .catch((err) => {
        alert(err.response.message);
      });
  }
  // Создаем несколько функций для считавания каждого изменений полей
  const handleOnChange1 = (event) => {
    setUsername(event.target.value)
  }
  const handleOnChange2 = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
    <Button  className="btnH" onClick={tagle}>Войти</Button>


<Modal 
  isOpen={toggle} 
  toggle={tagle}>
    <ModalHeader toggle={tagle}  style={{marginBottom: '40px'}}>Регистрация</ModalHeader>
    <Form>
        <FormGroup>
          <Label>Почта</Label>
          <Input
            placeholder="Пожалуйста, введите свою почту"
            type="email"
            value={username}
            onChange={(event) => handleOnChange1(event)}
          />
          {usernameInvalid && <div className="invalid-feedback">Пожалуйста, введите корректный адрес почты</div>}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Пароль</Label>
          <Input
            placeholder="Пожалуйста, введите свой пароль"
            type="password"
            value={password}
            onChange={(event) => handleOnChange2(event)}
            invalid={passwordInvalid}
          />
          {passwordInvalid && <div className="invalid-feedback">Пароль должен содержать не менее 6 символов</div>}
        </FormGroup>
        </Form>
  <Button  className="btn" onClick={(e)=>onLogin(e)}>Войти</Button>

  <Button className="btn" style={{marginLeft:'10px'}} onClick={tagle}>
    Закрыть
  </Button>
</Modal>
  </>
     

)
}
export default Login