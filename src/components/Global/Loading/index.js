import React from "react";

import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingWrapper>
      <h2>NutriJournal</h2>
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3rem;
  }
`;
