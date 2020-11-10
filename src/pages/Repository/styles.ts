import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }

    @media (min-width: 500px) {
      img {
        width: 120px;
        height: 120px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 40px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }

      @media (min-width: 500px) {
        & + li {
          margin-left: 80px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }

  button {
    margin-left: 10px;
    background: none;
    border: 0;
    display: flex;
    align-items: center;
  }
`;

export const RepositoryItem = styled.div`
  display: flex;
  background: #fff;
  padding: 24px;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  a {
    border-radius: 5px;
    width: 100%;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 18px;
        color: #3d3d4d;
      }
      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    @media (min-width: 500px) {
      div {
        strong {
          font-size: 20px;
        }
        p {
          font-size: 18px;
        }
      }
    }
  }
  > svg {
    color: #c9c9d4;
  }
  button {
    margin-left: 10px;
    background: none;
    border: 0;
    display: flex;
    align-items: center;
  }
`;
