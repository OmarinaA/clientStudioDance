import {Button} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
const Directions = () => {
    return (
        <div className = "class">
            <div className="image-text-block" style={{marginTop: '40px'}}>
      <div className="image-wrapper">
      <img src={require('./img/modern_direction.png')} />
      </div>
      <div className="text-wrapper">
        <h2>Модерн</h2>
        <p>танец, вырвавшийся на свободу. Балетмейстеры и танцоры поставили эмоции и чувства в центр внимания, 
            и выразить их стремились в свободном полете творческой мысли, не закованной в строгие рамки классической хореографии. </p> 
            <a href="/modern" className='detail' target="_ blank" >Подробнее</a>
      </div>
    </div>  
    <div className="image-text-block" style={{marginTop: '40px'}}>
    <div className="text-wrapper" >
    <h2>Балет</h2>
    <p>Отбросьте сомнения и не верьте стереотипам, что балет — удел избранных. 
    Приобщиться к изысканной атмосфере можно в любом возрасте. Без ограничений. </p>
    <a href="/Ballet" className='detail' target="_ blank" >Подробнее</a>
      </div>
      <div className="image-wrapper">
      <img src={require('./img/ballet.png')} />
      </div>
      </div>
      <div className="image-text-block" style={{marginTop: '40px'}}>
      <div className="image-wrapper">
      <img src={require('./img/stretching.png')} />
      </div>
      <div className="text-wrapper">
        <h2>Растяжка</h2>
        <p>Универсальное занятие, полезное для всех. Незаменимо для тех, кто мечтает о шпагате и красивом балетном шаге. Помогает деликатно проработать основные группы мышц и связок для гибкости и пластики тела. 
            Движения становятся плавнее и легче, па — выразительнее, а танец — грациознее. </p>
            <a href="/Stretching" className='detail' target="_ blank" >Подробнее</a>
 
      </div>
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
   
    )
    }
    export default Directions