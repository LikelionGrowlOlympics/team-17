import React, { useState } from "react";
import "../style/result.css";
import result1 from "../images/result1.png";
import result2 from "../images/result2.png";

const Result = (props) => {
  const [isMonth, setIsMonth] = useState(true);
  const dayChangeHandler = () => {
    isMonth
      ? props.setResult(props.result * 30)
      : props.setResult(props.result / 30);
    setIsMonth(!isMonth);
  };
  return (
    <>
      <h1 className="resultText">
        <strong>퇴사</strong>까지 <strong>{Math.ceil(props.result)}</strong>
        {isMonth ? "개월 " : "일 "}
        남았습니다.
      </h1>
      <img className="resultImg" src={result1} alt="당신의 결과는?" />

      <button className="submit" onClick={dayChangeHandler}>
        일수로 환산
      </button>
      <img className="resultImg" src={result2} alt="당신의 결과는?" />

      <button
        className="submit"
        onClick={() => {
          props.setIsSubmit(false);
          props.setIsLoading(false);
        }}
      >
        다시하기
      </button>
    </>
  );
};

export default Result;
