"use client";

import styled from "styled-components";

import HomeIcon from "@/app/_images/about/breadCrumb/home-icon.png";
import Image from "next/image";

export const BreadcrumbStyle = styled.div`
  padding: 15px 0;
  background: var(--dark-color);

  .breadcrumb {
    display: flex;
    align-items: center;
    margin: 0 -15px;
    flex-wrap: wrap;

    li {
      color: var(--white-color);
      font-size: 14px;
      font-weight: 500;
      padding: 0 20px;
      position: relative;

      &::after {
        content: ">";
        position: absolute;
        left: -5px;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 18px;
      }

      &:last-child::after {
        display: none;
      }

      a {
        color: var(--white-color);
      }

      span {
        display: block;
        width: 100%;
        max-width: 15px;
      }
    }
  }
`;

export default function Breadcrumb() {
  return (
    <BreadcrumbStyle>
      <div className="container">
        <ul className="breadcrumb">
          <li>
            <a href="#">
              <span>
                <Image src={HomeIcon} alt="home" width={15} />
              </span>
            </a>
          </li>
          <li>من نحن</li>
        </ul>
      </div>
    </BreadcrumbStyle>
  );
}
