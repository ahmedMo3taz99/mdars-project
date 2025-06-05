"use client";

import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-900);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-200);

  h1 {
    font-size: 3rem;
  }

  .goOut {
    background-color: var(--color-grey-600);
    padding: 2rem 6rem;
    margin-top: 3rem;
    border-radius: 2rem;
    transition: all 0.4s;

    &:hover {
      background-color: var(--color-grey-800);
    }
  }
`;

export default function Error({ error, reset }) {
  return (
    <Main>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>

      <button className="goOut" onClick={reset}>Try again</button>
    </Main>
  );
}
