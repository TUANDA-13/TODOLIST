import styled from 'styled-components';

export const StyledTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  .task {
    width: 100%;
    padding: 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    /* width: 382px; */
    justify-content: center;
    align-items: center;
    box-shadow: 0px -1px 28px #3e35780a;
    border-image: linear-gradient(45deg, red, blue) 10;
    border-bottom: 1px solid;

    &:hover {
      scale: 1.05;
      transition: 0.4s all ease;
    }

    &-title {
      width: 300px;
      text-align: left;
      text-overflow: clip;
    }

    .icon {
      width: 30px;
      cursor: pointer;

      &:hover {
        background: linear-gradient(to bottom, #ffffff, blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: blue;
      }
    }
  }
`;
