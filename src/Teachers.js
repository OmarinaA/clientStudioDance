const Teachers = () => {
    return (
      <div>
      <div className="row"> 
        <div className="h3" style={{textAlign: 'center'}}> 
          Преподаватели </div>
        <div className="side"> <div style={{marginTop: '40px'}}>
            <div className="card">
              <img src={`http://localhost:8081/photo/2`} width="570px" alt="" />
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
              <img src={`http://localhost:8081/photo/3`} width="570px" alt="" />
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
              <img src={`http://localhost:8081/photo/4`} width="570px" alt="" />
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
    </div>
  );
}
    export default Teachers