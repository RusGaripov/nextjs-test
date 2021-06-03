import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Image from "next/image";
export const TrainingFinished = () => {
  return (
    <div>
      <div
        className={css`
          background: #f7f9ff;
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
          display: flex;
          justify-content: center;
        `}
      >
        <Image src="/Finished.png" alt="Finished" width={464} height={532} />
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          margin: 0;
          padding: 0;
          height: 75px;
        `}
      >
        <div
          className={css`
            width: 552px;

            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 64px;
            line-height: 75px;
            color: #2b3172;
            display: flex;
            justify-content: center;
          `}
        >
          Отличная работа !
        </div>
      </div>
    </div>
  );
};

export default TrainingFinished;
