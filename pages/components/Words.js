import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

const Basic = ({ className }) => {
  const [inputValue, setInputValue] = useState(5);

  const changeCircle = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    document.getElementById("words").addEventListener("change", changeCircle);
  }, []);

  return (
    <div className={className}>
      <div
        className={css`
          max-width: 708px;
          height: 56px;
          justify-content: center;
          display: flex;
          align-items: center;
        `}
      >
        <h3
          className={css`
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 48.2498px;
            line-height: 57px;
            color: #371548;
            max-width: 344.02px;
            max-height: 56.45px;
            padding-top: 32px;
          `}
        >
          Сколько слов
        </h3>
      </div>
      <ul
        className={css`
          list-style-type: none;
          display: flex;
          justify-content: flex-start;
          margin-left: 44px;
          padding-top: 32px;
        `}
      >
        {listItems}
      </ul>
      <div
        className={css`
          margin-left: 82px;
          margin-top: 25px;
        `}
      >
        <input
          className={css`
            width: 532px;
            height: 23px;
            border-radius: 200px/100px;
            -webkit-appearance: none;
            color: #13bba4;
            margin-top: -1px;
            background: #fdd207;
            &::-webkit-slider-thumb {
              background: #0e0c0b;
              border: 13px solid #fdd207;
              border-radius: 88px;
              cursor: pointer;
              width: 44px;
              height: 44px;
              -webkit-appearance: none;
              margin-top: -4px;
            }

            &::-moz-range-thumb {
              background: #0e0c0b;
              border: 13px solid #fdd207;
              border-radius: 88px;
              cursor: pointer;
              width: 44px;
              height: 44px;
            }
          `}
          type="range"
          min="1"
          max="10"
          id="words"
          onChange={changeCircle}
          value={inputValue}
          step="1"
        />
      </div>
    </div>
  );
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listItems = numbers.map((number, index) => (
  <li
    className={css`
      margin-right: 32px;
      width: 23px;
      height: 45px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 38.5998px;
      line-height: 45px;
      display: flex;
      align-items: center;
      color: #000000;
    `}
    key={index}
  >
    {number}
  </li>
));

const Container = styled(Basic)`
  background-color: red;
  width: 708px;
  height: 220px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 48.2498px;
`;

export const Words = (props) => {
  return (
    <div>
      <Container />
    </div>
  );
};
