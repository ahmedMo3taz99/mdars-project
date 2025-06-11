"use client";
import styled from "styled-components";

export const MainSearchResultStyled = styled.div`
  background: var(--offwhite-color);
  padding: 27px 0 150px;

  .search-lead-title {
    max-width: 651px;
    padding: 50px 0 40px;

    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const SearchResult = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LeftResultStyled = styled.div`
  width: 68%;

  .parentOf {
    /* height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden; */
  }
`;
