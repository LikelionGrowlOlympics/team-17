import React from "react";
import "../style/loading.css";
import loading from "../images/loading.png";
import loadingCircle from "../images/loadingCircle.png";

const Loading = () => {
  return (
    <>
      <img className="loadingCircle" src={loadingCircle} alt="" />
      <p className="loadingP">loading...</p>
      <div className="loadingImg">
        <img src={loading} alt="로딩중.." />
      </div>
    </>
  );
};

export default Loading;
