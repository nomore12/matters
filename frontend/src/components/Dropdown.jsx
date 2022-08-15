import React, { useRef } from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  position: relative;

  .dropdown {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .dropdown {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 8px;
      width: 100%;
      height: 28px;
      margin-top: -20px;
      margin-bottom: 6px;
    }

    .dropdown-display {
      position: absolute;
      left: 0;
      height: 28px;
      width: 100%;
      //border: 1px solid green;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      //background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(0, 0, 0, 0.2);

      & p {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .dropdown-menu {
      position: absolute;
      left: -24px;
      top: -2px;
      padding: 8px 0 8px 8px;
      z-index: 3;
      display: ${(props) => (props.isOpen ? 'flex' : 'none')};
      flex-direction: column;
      align-items: center;
      gap: 4px;
      width: 100vw;
      height: 100vh;
      background: #fff;
      opacity: 0.9;
      //border: 1px solid black;
      border-radius: 0 0 5px 5px;

      .dropdown-menu__btn {
        font-size: 18px;
        height: 48px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: rgba(0.1, 0.1, 0.1, 0.1);
          border-radius: 5px;
        }
      }
    }
  }
`;

const height = (Math.sqrt(3) / 2) * 24;

const Dropdown = ({
  categories,
  value,
  onMenuClick,
  isOpen,
  selectCategory,
}) => {
  const ref = useRef(null);

  return (
    <ContainerStyle isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
      <div className="dropdown">
        <div className="dropdown-display" onClick={onMenuClick}>
          <p>{value}</p>
        </div>
        <div ref={ref} className="dropdown-menu">
          {categories &&
            categories.map((item, index) => {
              return (
                <div
                  className="dropdown-menu__btn"
                  key={index}
                  onClick={(e) => selectCategory(e, item)}>
                  {item}
                </div>
              );
            })}
        </div>
      </div>
    </ContainerStyle>
  );
};

export default Dropdown;
