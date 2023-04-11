import styled from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .content {
    width: 400px;
  }
  h1 {
    font-size: 50px;
    background: linear-gradient(to right, #00bfff, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  input {
    height: 30px;
    box-sizing: border-box;
    max-width: 160px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #ff4c4c;
    padding: 0px 5px;
    font-family: 'Open Sans';
  }
  .btn-save {
    color: white;
    height: 30px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #00bfff, #ff4c4c);
    cursor: pointer;
    font-weight: 700;
  }

  .create {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .filter {
    display: block;
    width: 150px;
    cursor: pointer;
    border-bottom: 1px solid #ff4c4c;
    position: relative;
    text-align: left;

    &-display {
      height: 30px;
    }

    .direction-icon {
      position: absolute;
      top: 0px;
      right: 6px;
    }

    &-list {
      position: absolute;
      overflow: hidden;
      height: 0px;
      transition: all 0.4s ease;
      top: 31px;
      z-index: 1;
      background-color: white;
      box-shadow: 1px 2px 1px #f4aab9;
    }

    &-item {
      width: 130px;
      padding: 4px 10px;
    }
  }

  .filter:hover {
    .filter-list {
      height: 90px;
      /* padding:10px; */
      box-sizing: border-box;
    }

    & .filter-item:hover {
      background-color: #00bfff1f;
    }
  }
`;
