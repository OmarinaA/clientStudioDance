import React from 'react';
import "./App.css"
import Carousel from 'react-bootstrap/Carousel';
import { Link, animateScroll as scroll } from "react-scroll";
import video from './img/video.mp4'
const Home = () => {
    return (
        <div className = "class">
        <div id="section_1">
        <div className="button-text1" style={{paddingTop: '510px', marginLeft: '150px'}}>
        <Link to="section_3"><img className="img-strelka" src={require('./img/play.png')} alt="..." width="43px" />
          <div className="p"> Посмотреть как, <p>проходят занятия</p></div> </Link>
        </div> </div>
      <div id="section_2">
        <div className="h1">
          Добро пожаловать
          <p>в танцевальную студию GRASE</p>
        </div>
        <div className="image-text-block">
      <div className="image-wrapper">
      <img src={require('./img/block1.png')} />
      </div>
      <div className="text-wrapper">
        <h2>О нас</h2>
        <p>Мы ставим перед собой задачи влюбить в танцы как можно больше людей и вырастить профессиональных целеустремлённых танцоров. 
          С трепетом относимся к каждому ученику и стараемся создать на уроках танцев, прежде всего, дружный коллектив, уютную и 
          позитивную атмосферу.</p>
     
      </div>
      
    </div>  
    <div className="image-text-block">
    <div className="text-wrapper" >
        <h2>Где проходят занятия?</h2>
        <p>Просторные залы и классы оборудованы всем необходимым. 
          Тематическое освещение и интерьер помогут проникнуться в атмосферу и комфортно проводить время занятий.</p>
      </div>
      <div className="image-wrapper">
      <img src={require('./img/блок1.png')} />
      </div>
      </div>
     </div>
   
   
    <div  id="section_3">
      <div className="h1">
        Как проходят занятия
      </div>
    </div>
    <div className="image-text-block">
    <video width="570" controls >
      <source src={video} type="video/mp4"/>
</video>

<div className="text-wrapper" >
        <p>У нас преподаются бальные, спортивно-бальные танцы и гимнастика. У нас вы можете всесторонне развивать свое тело и совершенствоваться, танцуя!<p></p>
<p>Каждый человек самовыражается, и танец позволяет сделать это как нельзя лучше. 
  Профессиональные хореографы владеют разными методами обучения танцам, смогут найти подход к каждому ученику, 
  вне зависимости от имеющихся у него навыков и опыта.</p> </p>
      </div></div>

<div  id="section_4">
<div className="h1">
        Галлерея
      </div>
<Carousel slide={false}>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require('./img/slider2.png')}
    alt="First slide"
  />

</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require('./img/slider3.png')}
    alt="Second slide"
  />

</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require('./img/слайдер.jpg')}
    alt="Third slide"
  />

  
</Carousel.Item>
</Carousel>
</div>

<div>
        <div className="row">
          <div className="side">
            <div className="h2" style={{marginTop: '100px'}}>Контакты</div>
            <div className="h4" style={{marginTop: '60px'}}>Адрес</div>
          </div>
          <div className="text1" style={{marginTop: '10px'}}>ул. Первомайская, 11, Краснодар</div>
          <div className="text1" style={{marginTop: '5px'}}>ул. studiograce@gmail.com</div>
          <div className="text1" style={{marginTop: '5px'}}>+ 7 901 140 87 99</div>
        </div>
        <div className="row" style={{marginLeft: '400px', transform: 'translate(0px, -360px)'}}>
          <div className="side">
            <div className="h4" style={{marginTop: '150px'}}>Cоцсети</div>
            <div className="text1" style={{marginTop: '10px'}}><a href="http://example.com" className="a">Telegram</a></div>
            <div className="text1" style={{marginTop: '5px'}}><a href="http://example.com" className="a">Instagram</a></div>
          </div>
          <div className="main" style={{marginLeft: '330px', marginTop: '-200px'}}>
            <div className="descriptor">Запишитесь на пробное <p>занятие</p></div>
            <a href="http://example.com" target="_ blank"><img style={{marginLeft: '390px', marginBottom: '-240px'}} src="C:\Users\user\Desktop\html-css\images\стрелка-кнопка.png" width="30px" alt="..." /> </a>
            <input type="text" placeholder="email" style={{paddingTop: '100px'}} defaultValue className="some-input" />
          </div>
        </div>
      </div>
</div>
      );
    }
    export default Home
    
    