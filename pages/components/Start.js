import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Image from "next/image";
const Basic = ({ className }) => {
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
      ></div>

      <div
        className={css`
          margin-top: 0px;
          margin-left: 150px;
        `}
      >
        <Image src="/start.png" alt="Start" width={390} height={110} />
        <div
          className={css`
            margin-left: 115px;
            margin-top: -85px;
          `}
        >
          <Image src="/startBg.png" alt="StartBg" width={156} height={58} />
        </div>
      </div>
    </div>
  );
};
const Container = styled(Basic)`
  width: 708px;
  height: 220px;
`;

export const Start = (props) => {
  return (
    <div>
      <Container />
    </div>
  );
};
