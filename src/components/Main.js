import React from "react";
import "../style/main.css";
import main1 from "../images/main1.png";
import main2 from "../images/main2.jpeg";

const Main = (props) => {
  const submitHandler = () => {
    props.setIsSubmit(true);
    props.setResult(
      (props.car.filter((item) => item.clicked === true)[0].price +
        props.city.filter((item) => item.clicked === true)[0].price +
        props.save) /
        (props.salary - props.cost)
    );
    setTimeout(() => props.setIsLoading(true), 1000);
  };

  return (
    <>
      <h1>퇴사까지 얼마나 남았을까?</h1>
      <img className="firstMainImage" src={main1} alt="mainImage" />
      <div className="inputs">
        <div>
          당신의 월급은?
          <input
            className="salaryInput"
            onChange={(e) => props.setSalary(e.target.value)}
            value={props.salary}
          />
          만 원
        </div>
        <div>
          당신의 한 달 지출은?
          <input
            className="costInput"
            onChange={(e) => props.setCost(e.target.value)}
            value={props.cost}
          />
          만 원
        </div>
      </div>
      <img className="secondMainImage" src={main2} alt="mainImage" />
      <div className="cars select">
        <h2>미래의 차를 선택해주세요 :</h2>
        <div className="selectWrapper">
          {props.car.map((item, idx) => (
            <div
              onClick={() => {
                props.setCar(
                  props.car.map((setItem) =>
                    item.car === setItem.car
                      ? { ...setItem, clicked: true }
                      : { ...setItem, clicked: false }
                  )
                );
              }}
              key={idx}
              style={
                item.clicked
                  ? { color: "white", backgroundColor: "rgb(255, 71, 12)" }
                  : null
              }
              className="selectItem"
            >
              {item.car}
            </div>
          ))}
        </div>
      </div>
      <div className="house select">
        <h2>미래에 살 지역을 선택해주세요 :</h2>
        <div className="selectWrapper">
          {props.city.map((item, idx) => (
            <div
              onClick={() => {
                props.setCity(
                  props.city.map((setItem) =>
                    item.city === setItem.city
                      ? { ...setItem, clicked: true }
                      : { ...setItem, clicked: false }
                  )
                );
              }}
              key={idx}
              className="selectItem"
              style={
                item.clicked
                  ? { color: "white", backgroundColor: "rgb(255, 71, 12)" }
                  : null
              }
            >
              {item.city}
            </div>
          ))}
        </div>
      </div>
      <div className="inputs">
        목표 저축 금액 :
        <input
          className="costInput"
          onChange={(e) => props.setSave(e.target.value)}
          value={props.save}
          placeholder=""
        />
        만 원
      </div>

      <button className="submit" onClick={submitHandler}>
        결과 보기
      </button>
    </>
  );
};

export default Main;
