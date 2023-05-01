import React from "react";
import { Card } from "react-bootstrap";
import { CardBody, CardHeader, CardTitle, Button } from "reactstrap";

const Abonements = () => {
  const subscriptions = [
    {
      id: 1,
      title: "Пробное занятие",
      price: 0,
      sessions: 1,
      period: "неограничено",
      directions: 1,
      buttonLink: ""
    },
    {
      id: 2,
      title: "4 занятия",
      price: 1600,
      sessions: 4,
      period: "1 месяц",
      directions: 1,
      buttonLink: "file:///C:/Users/user/Desktop/html-css/of_4zan.html"
    },
    {
      id: 3,
      title: "8 занятий",
      price: 2800,
      sessions: 8,
      period: "1 месяц",
      directions: 1,
      buttonLink: "file:///C:/Users/user/Desktop/html-css/of_8zan.html"
    },
    {
      id: 4,
      title: "12 занятий",
      price: 3500,
      sessions: 12,
      period: "2 месяца",
      directions: 2,
      buttonLink: "file:///C:/Users/user/Desktop/html-css/of_12zan.html"
    },
    {
      id: 5,
      title: "Индивидуальное занятие",
      price: 600,
      sessions: 1,
      period: "20 дней",
      directions: 1,
      buttonLink: ""
    },
    {
      id: 6,
      title: "Безлимит",
      price: 5000,
      sessions: "неограничено",
      period: "1,5 месяца",
      directions: "неограничено",
      buttonLink: ""
    }
  ];

  return (
    <div>
      <div className="row">
        <div className="h3" style={{ textAlign: "center" }}>
          {" "}
          Абонементы
        </div>
        {subscriptions.map((abonement, index) => (
          <>

<Card>
      <CardHeader className="CardHeader"> <div>{abonement.title}</div> <div style={{textAlign: 'right', alignItems:'right', justifyContent:'right', display: 'inline-'}}>{abonement.price} руб.</div></CardHeader>
          <CardBody>
              <CardTitle>занятий: {abonement.sessions}</CardTitle>
              <CardTitle>период: {abonement.period}</CardTitle>
              <CardTitle>направлений: {abonement.directions}</CardTitle>
              <Button className="btnabonement">Забронировать</Button>
            </CardBody>
          </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default Abonements;
