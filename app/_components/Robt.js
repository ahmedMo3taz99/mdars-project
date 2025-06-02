"use client"
import styled from "styled-components";

import Massage from "@/app/_images/robot/message-icon.png";

/* Message Box 
=================*/
const MessageBox = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 2rem;
  z-index: 99999;

  &:hover p {
    color: var(--offwhite-color);
    background: var(--dark-color);
  }

  a {
    display: block;
    width: 8rem;
    height: 8rem;

    background: var(--dark-color) url(${Massage.src}) no-repeat center/ 30px;
    box-shadow: 0.2rem 2.7rem 7.79rem 0.3rem #2a94e138;
    border-radius: 7rem;
    margin: 0 auto;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--dark-color);
    background: var(--offwhite-color);
    border-radius: 0.8rem;
    padding: 0.5rem;
    display: inline-block;
    margin-bottom: 0;
    transition: all 0.4s;
  }
`;

export default function Robt() {
  return (
    <MessageBox href="#">
      <a href="#"></a>
      <p>مستشارك التعليمي</p>
    </MessageBox>
  );
}
