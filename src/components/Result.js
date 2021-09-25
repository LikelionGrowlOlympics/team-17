import React from "react";
import "../style/result.css";
import result1 from "../images/result1.png";
import result2 from "../images/result2.png";

const Result = (props) => {
  console.log(props.result);
  return (
    <>
      <h1 className="resultText">
        <strong>퇴사</strong>까지 <strong>{Math.ceil(props.result)}</strong>개월
        남았습니다.
      </h1>
      <img className="resultImg" src={result1} alt="당신의 결과는?" />

      <button className="submit">일수로 환산</button>
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
