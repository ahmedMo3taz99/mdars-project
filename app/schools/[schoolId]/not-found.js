"use client";

import Link from "next/link";
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

function NotFound() {
  return (
    <Main>
      <h1>This cabin could not be found :(</h1>
      <Link href="/school" className="goOut">
        back to all cabins
      </Link>
    </Main>
  );
}

export default NotFound;
