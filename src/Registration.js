import React, { useState } from 'react';
import { Label, Form, FormGroup, Button, Input } from 'reactstrap';
import AuthService from './services/Auth.service';
import {Modal, ModalHeader} from 'reactstrap';



const Registration = () => {
  const [username, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameInvalid, setNameInvalid] = useState(false);
  const [loginInvalid, setLoginInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [toggle, setToggle] = useState(false);


  const tagle=() =>{
    setToggle(!toggle)
  }

  const onRegistration = async () => {
    setNameInvalid(false);
    setLoginInvalid(false);
    setPhoneInvalid(false);
    setEmailInvalid(false);
    setPasswordInvalid(false);

    let isValid = true;

    if (!login || login.length < 3) {
      setLoginInvalid(true);
      isValid = false;
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      setEmailInvalid(true);
      isValid = false;
    }
    if (!password || password.length < 6) {
      setPasswordInvalid(true);
      isValid = false;
    }

    if (!isValid) {
      alert('Пожалуйста, введите корректные данные');
      return;
    }

    try {
      const response = await AuthService.register(username, login, phone, email, password);
      console.log(response);
      if (response.data.status !== 200) {
        console.log(response);
        // alert(response.message);
        
      } else {
        alert('Регистрация прошла успешно!');
        tagle()
        window.location.reload()


      }
    } catch (err) {
      alert(err.response.message);
    }
  };

  const handleOnChange = (event) => {
    setName(event.target.value);
  }; 
  
  const handleOnChange4 = (event) => {
    setLogin(event.target.value);
  };
  
  const isValidPhoneNumber = (number) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(number);
  };

  const handleOnChange1 = (event) => {
    const phone = event.target.value;
    if (!isValidPhoneNumber(phone)) {
      setPhone('');
    } else {
      setPhone(phone);
    }
  };

  const handleOnChange2 = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChange3 = (event) => {
    setPassword(event.target.value);
  };

 
 
return (
<>
<Button  className="btnH" onClick={tagle}>Зарегистрироваться</Button>


<Modal 
  isOpen={toggle} 
  toggle={tagle}
  style={{
    
    }}>
    <ModalHeader toggle={tagle}  style={{marginBottom: '40px'}}>Регистрация</ModalHeader>
  <Form>
    <FormGroup>
      <Label>Имя</Label>
      <Input className="form"
        placeholder="Пожалуйста, введите ваше имя"
        type="text"
        value={username}
        onChange={(event) => handleOnChange(event)}
        invalid={nameInvalid}
      />
      {nameInvalid && <div className="invalid-feedback">Имя должно содержать не менее 3 символов</div>}
    </FormGroup>
    <FormGroup>
      <Label>Логин</Label>
      <Input className="form"
        placeholder="Пожалуйста, придумайте логин"
        type="text"
        value={login}
        onChange={(event) => handleOnChange4(event)}
        invalid={loginInvalid}
      />
      {nameInvalid && <div className="invalid-feedback">Имя должно содержать не менее 3 символов</div>}
    </FormGroup>
    <FormGroup>
  <Label>Номер телефона</Label>
  <Input
    placeholder="Пожалуйста, введите свой номер телефона"
    type="tel"
    value={phone}
    onChange={(event) => handleOnChange1(event)}
    invalid={phoneInvalid}
  />
  {phoneInvalid && <div className="invalid-feedback">Номер телефона должен быть корректным</div>}
</FormGroup>

    <FormGroup>
      <Label>Почта</Label>
      <Input 
        placeholder="Пожалуйста, введите свою почту"
        type="email"
        value={email}
        onChange={(event) => handleOnChange2(event)}
        invalid={emailInvalid}
      />
      {emailInvalid && <div className="invalid-feedback">Пожалуйста, введите корректный адрес почты</div>}
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Пароль</Label>
      <Input
        placeholder="Пожалуйста, введите свой пароль"
        type="password"
        value={password}
        onChange={(event) => handleOnChange3(event)}
        invalid={passwordInvalid}
      />
      {passwordInvalid && <div className="invalid-feedback">Пароль должен содержать не менее 6 символов</div>}
    </FormGroup>
  </Form>
  <Button  onClick={onRegistration}>Зарегистрироваться</Button>

  <Button style={{marginLeft:'10px'}} onClick={tagle}>
    Закрыть
  </Button>
</Modal>
  </>
 

)
}
export default Registration
