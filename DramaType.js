import React, { useState } from "react";
import "./Design.css";
import img from "./img/wyw.jpg";

const DramaType = () => {
  const [titles, setTitles] = useState([
    { id: 1, text: "이상한 변호사 우영우" },
    { id: 2, text: "그해 우리는" },
    { id: 3, text: "응답하라 1988" },
    { id: 4, text: "멜로가 체질" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    console.log("event: ", e);
    setInputText(e.target.value);
  };
  const onClick = () => {
    const nextTitles = titles.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setTitles(nextTitles);
    setInputText("");
  };

  const titlesList = titles.map((title) => (
    <li className="container" key={titles.id}>
      {title.text}
      <a href="https://namu.wiki/w/%EC%9D%B4%EC%83%81%ED%95%9C%20%EB%B3%80%ED%98%B8%EC%82%AC%20%EC%9A%B0%EC%98%81%EC%9A%B0">
        {title.id === 1 ? (
          <img src={img} alt="no img" className="wywimg" />
        ) : null}
      </a>

      <a href="https://namu.wiki/w/%EA%B7%B8%20%ED%95%B4%20%EC%9A%B0%EB%A6%AC%EB%8A%94">
        {title.id === 2 ? (
          <img
            src="https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2021/11/PS21111900024.jpg"
            alt="no img"
            className="thisyearimg"
          ></img>
        ) : null}
      </a>

      <a href="https://namu.wiki/w/%EC%9D%91%EB%8B%B5%ED%95%98%EB%9D%BC%201988">
        {title.id === 3 ? (
          <img
            src="http://img.tf.co.kr/article/home/2015/10/05/201542831444052122.jpg"
            alt="no img"
            className="rtimg"
          ></img>
        ) : null}

        <a href="https://namu.wiki/w/%EB%A9%9C%EB%A1%9C%EA%B0%80%20%EC%B2%B4%EC%A7%88">
          {title.id === 4 ? (
            <img
              src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5eGL/image/AaIhn0LTiqPiKM_Bey-hCkWtW9w.jpg"
              alt="no img"
              className="meloimg"
            ></img>
          ) : null}
        </a>
      </a>
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange}></input>
      <button className="addbtn" onClick={onClick}>
        영화 추가
      </button>
      <div className="BoxScroll">{titlesList}</div>
    </>
  );
};

export default DramaType;
