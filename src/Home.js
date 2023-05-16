import React from 'react';
import "./App.css"
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-scroll";
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

        </div>
      );
    }
    export default Home
    
    