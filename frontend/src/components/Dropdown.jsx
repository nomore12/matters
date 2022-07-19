import React, { useRef } from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  .dropdown {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .dropdown {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 8px;
      height: 28px;
      margin-top: -20px;
      margin-bottom: 6px;
    }

    .dropdown-display {
      height: 28px;
      width: 128px;
      border: 1px solid green;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px 5px 0 0;
    }

    .dropdown-menu {
      padding: 8px 0 8px 8px;
      z-index: 2;
      display: ${(props) => (props.isOpen ? 'flex' : 'none')};
      flex-direction: column;
      gap: 4px;
      background-color: white;
      width: 128px;
      border: 1px solid black;
      border-radius: 0 0 5px 5px;

      .dropdown-menu__btn {
        &:hover {
          background-color: red;
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
