"use client";

import Link from "next/link";
import styled from "styled-components";

const Main = styled.main`
  background-color: #999;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: 3rem;
  }

  .goOut {
    background-color: #6666;
    padding: 2rem 6rem;
    margin-top: 3rem;
    border-radius: 2rem;
    transition: all 0.4s;

    &:hover {
      background-color: #111;
    }
  }
`;

function NotFound() {
  return (
    <Main>
      <h1>This cabin could not be found :(</h1>
      <Link href="/schools" className="goOut">
        back to all cabins
      </Link>
    </Main>
  );
}

export default NotFound;
