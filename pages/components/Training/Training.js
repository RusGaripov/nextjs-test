import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Image from "next/image";
import { TrainingFinished } from "./TrainingFinished";
const Basic = ({ className, randomWords, data }) => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (count < Number.parseInt(data.words))
      setTimeout(nextClick, data.speed * 1000);
    else {
      setFinished(true);
    }
  }, [count]);

  useEffect(() => {
    if (count < Number.parseInt(data.words)) {
      let width = 2020; // ширина картинки
      let list = document.querySelector(`.li`);
      list.style.marginLeft = -width * count + "px";
    }
  }, [count]);

  const nextClick = () => {
    setCount(count + 1);
  };

  const listItems = randomWords.map((randomWord, index) => {
    return (
      <li
        key={index}
        className="li"
        style={{
          margin: "0 auto",
          marginRight: "10px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "38.5998px",
          lineHeight: "45px",
          display: "flex",
          color: "#000000",
        }}
      >
        <div
          className="liWrapper"
          style={{
            width: "2000px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className={css`
              font-family: Roboto;
              font-style: normal;
              font-weight: 900;
              font-size: 60px;
              line-height: 70px;
              display: flex;
              align-items: center;
              margin-right: ${(data.distance * 37.936267) / 2}px;
            `}
          >
            {randomWord.slice(0, Math.ceil(randomWord.length / 2))}
          </div>
          <div
            className={css`
              align-items: center;
              margin-top: 35px;
            `}
          >
            <Image src="/a.png" alt="minus" width={88} height={38} />
          </div>
          <div
            className={css`
              font-family: Roboto;
              font-style: normal;
              font-weight: 900;
              font-size: 60px;
              line-height: 70px;
              display: flex;
              align-items: center;
              margin-left: ${(data.distance * 37.936267) / 2}px;
            `}
          >
            {randomWord.slice(
              Math.ceil(randomWord.length / 2, randomWord.length - 1)
            )}
          </div>
        </div>
      </li>
    );
  });

  if (finished) return <TrainingFinished />;

  if (!finished)
    return (
      <div className={className}>
        <div
          className={css`
            box-sizing: border-box;
            display: flex;
            justify-content: flex-end;
          `}
        >
          <div
            className={css`
              margin-right: 55px;
              margin-top: 86px;
            `}
          >
            <Image src="/Sirius.png" alt="Sirius" width={338} height={135} />
          </div>
        </div>
        <div
          className={css`
            margin: 0 auto;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              display: inline-block;
              width: 100%;
              margin-top: 300px;
              overflow: hidden;
            `}
          >
            <ul className="wrapper" style={{ display: "flex" }}>
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    );
};

const Container = styled(Basic)`
  max-width: 1920px;
  margin: 0 auto;
`;

export const Training = (props) => {
  return (
    <div>
      <Container randomWords={props.randomWords} data={props.data} />
    </div>
  );
};
