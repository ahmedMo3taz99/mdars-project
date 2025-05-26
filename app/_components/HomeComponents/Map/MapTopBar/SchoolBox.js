import styled from "styled-components";

const SchoolBoxStyle = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;

  .schools-list {
    background: var(--white-color);
    border-radius: 10px;
    display: inline-block;
    position: absolute;
    top: 100%;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;

    &.active {
      opacity: 1;
      visibility: visible;
    }

    a {
      font-weight: 700;
      position: relative;

      display: block;
      color: var(--dark-color);
      font-size: 18px;
      padding: 8px 10px;
      border-radius: 8px;

      &.active {
        background: var(--secondary-color);
        color: var(--white-color);
      }
    }
  }

  .select-school {
    a {
      font-size: 30px;
      font-weight: 700;
      color: var(--white-color);
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: -25px;
        top: 50%;
        transform: translate(0, -50%) rotate(45deg);
        width: 12px;
        height: 12px;
        border-style: solid;
        border-width: 3px;
        border-color: transparent var(--white-color) var(--white-color)
          transparent;
      }
    }
  }
`;

export default function SchoolBox() {
  return (
    <SchoolBoxStyle>
      <div className="select-school">
        <a href="#inqirah">مدارس تركيا</a>
      </div>
      <ul className="schools-list">
        <li>
          <a className="active" href="#inqirah">
            مدارس تركيا
          </a>
        </li>
        <li>
          <a href="#sifas">مدارس السعودية</a>
        </li>
      </ul>
    </SchoolBoxStyle>
  );
}
