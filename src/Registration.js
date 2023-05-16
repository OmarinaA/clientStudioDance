import React, { useState } from 'react';
import { Label, Form, FormGroup, Button, Input } from 'reactstrap';
import AuthService from './services/Auth.service';
import { Modal, ModalHeader } from 'reactstrap';

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

    const tagle = () => {
        setToggle(!toggle);
    };

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
        if (!phone || !phone.match(/^((\+7|7|8)+([0-9]){10})$/)) {
            setPhoneInvalid(true);
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

        const registrationData = {
            username,
            login,
            phone,
            email,
            password,
        };

        try {
            const response = await AuthService.register(registrationData);
            console.log(response);
            if (response.status !== 200) {
                console.log(response);
                alert(response.data.message);
            } else {
                console.log('jhgf');

                // Отправляем письмо с ссылкой для подтверждения
                // const emailData = {
                //     to: email,
                //     subject: 'Подтвердите свою учетную запись',
                //     body: `Для подтверждения учетной записи перейдите по ссылке: ${response.data.activationLink}`,
                // };
                // await AuthService.sendConfirmationEmail(emailData);

                alert(
                    'Регистрация прошла успешно! На вашу электронную почту отправлено письмо с инструкциями для активации учетной записи.'
                );
                tagle();
                window.location.reload()
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    const handleOnChange = (event) => {
        setName(event.target.value);
    };

    const handleOnChange4 = (event) => {
        setLogin(event.target.value);
    };


  const handleOnChange1 = (event) => {
    setPhone(event.target.value);
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
  color="primary"
  >
    <ModalHeader toggle={tagle} >Регистрация</ModalHeader>
  <Form>
      {/*<Button onClick={()=>AuthService.VkRes()}>VK</Button>*/}
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
      {loginInvalid && <div className="invalid-feedback">Логин должен содержать не менее 3 символов</div>}
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


    {/*<Form>*/}
    {/*    <FormGroup>*/}
    {/*        <Label>Код активации</Label>*/}
    {/*        <Input*/}
    {/*            placeholder="Пожалуйста, введите код активации"*/}
    {/*            type="text"*/}
    {/*            value={activationLink}*/}
    {/*            onChange={(event) => setActivationLink(event.target.value)}*/}
    {/*        />*/}
    {/*    </FormGroup>*/}
</Modal>
  </>


)
}
export default Registration
