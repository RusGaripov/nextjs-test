import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Image from "next/image";
const Basic = ({ className }) => {
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.getElementById("speed3").addEventListener("click", () => {
      if (count > 0) setCount(count - 0.5);
      else {
        setCount(count);
      }
    });

    document.getElementById("speed3").removeEventListener("click", () => {
      if (count > 0) setCount(count - 0.5);
      else {
        setCount(count);
      }
    });

    document.getElementById("speed").addEventListener("click", () => {
      if (count > 0) setCount(count - 0.5);
      else {
        setCount(count);
      }
    });

    document.getElementById("speed").removeEventListener("click", () => {
      if (count > 0) setCount(count - 0.5);
      else {
        setCount(count);
      }
    });
  }, [count]);

  useEffect(() => {
    document.getElementById("speed4").addEventListener("click", () => {
      if (count < 5) setCount(count + 0.5);
      else {
        setCount(count);
      }
    });
    document.getElementById("speed5").addEventListener("click", () => {
      if (count < 5) setCount(count + 0.5);
      else {
        setCount(count);
      }
    });
    document.getElementById("speed6").addEventListener("click", () => {
      if (count < 5) setCount(count + 0.5);
      else {
        setCount(count);
      }
    });

    document.getElementById("speed4").removeEventListener("click", () => {
      if (count < 5) setCount(count + 0.5);
      else {
        setCount(count);
      }
    });
    document.getElementById("speed5").removeEventListener("click", () => {
      if (count < 5) setCount(count + 0.5);
      else {
        setCount(count);
      }
    });
    document.getElementById("speed6").removeEventListener("click", () => {
      if (count < 5) setCount(count + 0.5);
      else {
        setCount(count);
      }
    });
  }, [count]);

  return (
    <div className={className}>
      <div
        className={css`
          width: 708px;
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
            max-width: 547px;
            max-height: 56.45px;
            padding-top: 32px;
          `}
        >
          Скорость
        </h3>
        <div
          className={css`
            width: 127px;
            height: 60px;
            margin-top: 70px;
            margin-left: 46px;
            background: #ffffff;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 19.9968px;
          `}
        >
          <span
            className={css`
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 47.9924px;
              line-height: 56px;
              color: #000000;
              margin-left: 50px;
            `}
            id="speedText"
            value={count}
          >
            {count}
          </span>
        </div>
        <div
          className={css`
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 47.9924px;
            line-height: 56px;
            color: #371548;
            margin-top: 60px;
            margin-left: 16px;
          `}
        >
          сек.
        </div>
      </div>

      <div
        className={css`
          margin-left: 250px;
          margin-top: 45px;
        `}
        id="speed"
        value={count}
      >
        <Image src="/minusBg.svg" alt="minus" width={92} height={92} />
      </div>
      <div
        className={css`
          margin-left: 270px;
          margin-top: -62px;
        `}
        id="speed3"
        value={count}
      >
        <Image src="/minus.png" alt="minus" width={51} height={11} />
      </div>
      <div
        className={css`
          margin-left: 363px;
          margin-top: -56px;
        `}
        id="speed4"
        value={count}
      >
        <Image src="/plusBg.svg" alt="plus" width={92} height={92} />
      </div>
      <div
        className={css`
          margin-left: 403px;
          margin-top: -76px;
        `}
        id="speed5"
        value={count}
      >
        <Image src="/plus.png" alt="plus" width={11} height={51} />
      </div>
      <div
        className={css`
          margin-left: 383px;
          margin-top: -40px;
        `}
        id="speed6"
        value={count}
      >
        <Image src="/minus.png" alt="minus" width={51} height={11} />
      </div>
    </div>
  );
};

const Container = styled(Basic)`
  background-color: red;
  width: 708px;
  height: 220px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 48.2498px;
`;

export const Speed = (props) => {
  return (
    <div>
      <Container />
    </div>
  );
};
