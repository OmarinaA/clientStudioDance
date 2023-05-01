const Teachers = () => {
    return (
      <div>
      <div className="row"> 
        <div className="h3" style={{textAlign: 'center'}}> 
          Преподаватели </div>
        <div className="side"> <div style={{marginTop: '40px'}}>
            <div className="card">
              <img src={require('./img/kozlova.png')} width="570px" alt="" />
              <div className="overlay">
                <div className="links">
                <a href="#"><img src={require('./img/inst.png')} width="40px" alt="" /></a>
                  <a href="#"><img src={require('./img/tg.png')} width="40px" style={{marginLeft: '10px'}} alt="" /></a>
                  <a href="#"><img src={require('./img/wp.png')} width="40px" style={{marginLeft: '10px'}} alt="" /></a>
                </div>
              </div>
            </div></div>
        </div>
        <div className="main">
          <div className="h3">
            Козлова Кристина </div>
          <div className="text"><p>Учитель клуба по современным танцам и танцевальной хореографии для детей</p>
            <p>Более 150 наград в турнирах окружного и федерального масштаба.</p>
            <p>Опыт работы в преподавании детям художественной гимнастики и современной хореографии.</p></div>
        </div>
      </div>
      <div className="row"> 
        <div className="side"> <div className="h3">
            Каткова Екатерина </div>
          <div className="text"> <p>В 2016 году закончила хореографическое училище по специальности «Артист балета».</p>
            <p>На данный момент заканчивает 3 курс Краснодарского государственного института культуры, хореографическое отделение.</p>
            <p>Мастер спорта по эстетической гимнастике, выступала в составе сборной РФ.</p>
          </div>
        </div>
        <div className="main">
          <div style={{marginTop: '40px'}}>
            <div className="card">
              <img src={require('./img/katkova.png')} width="570px" alt="" />
              <div className="overlay">
                <div className="links">
                  <a href="#"><img src={require('./img/inst.png')} width="40px" alt="" /></a>
                  <a href="#"><img src={require('./img/tg.png')} width="40px" style={{marginLeft: '10px'}} alt="" /></a>
                  <a href="#"><img src={require('./img/wp.png')} width="40px" style={{marginLeft: '10px'}} alt="" /></a>
                </div>
              </div>
            </div></div>
        </div>
      </div>
      <div className="row"> 
        <div className="side"> <div style={{marginTop: '40px'}}>
            <div className="card">
              <img src={require('./img/sobolenko.png')} width="570px" alt="" />
              <div className="overlay">
                <div className="links">
                <a href="#"><img src={require('./img/inst.png')} width="40px" alt="" /></a>
                  <a href="#"><img src={require('./img/tg.png')} width="40px" style={{marginLeft: '10px'}} alt="" /></a>
                  <a href="#"><img src={require('./img/wp.png')} width="40px" style={{marginLeft: '10px'}} alt="" /></a>
                </div>
              </div>
            </div></div>
        </div>
        <div className="main">
          <div className="h3">
            Соболенко Кристина </div>
          <div className="text"><p>Участница команд "Aliens Crew" (под руководством Кирилла Цыганова) и «РЭП».</p>
            <p>Снималась в музыкальных клипах таких исполнителей, как:
              FLESH, Илья Бланко, Султан Ураган.</p>
            <p>Мастер спорта по эстетической гимнастике, выступала в составе сборной РФ.</p></div>  
        </div>
      </div>
      <a className="button" style={{marginLeft: '35%', marginTop: '60px'}} href="file:///C:/Users/user/Desktop/html-css/directions.html" target="_blank">Перейти к направлениям</a> 
      <div className="main" id="section5">
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
    export default Teachers