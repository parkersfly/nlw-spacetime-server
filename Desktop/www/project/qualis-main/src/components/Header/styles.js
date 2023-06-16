import styled from "styled-components";

export const Container = styled.header`

  .desktop {
    display: none;
  }
  
  > nav {

    padding: 20px 20px 0 20px;

    div {
      width: 100%;
      justify-content: center;

      img {
        width: 100%;
        height: 60px;
      }

    }

  }

  @media (min-width: 1024px) {

    .mobile {
      display: none;
    }

    .desktop {
      display: flex !important;
    }

    > nav {
    align-items: center;
    justify-content: space-between;

    padding: 20px 50px;

    ul {
      gap: 53px;
      align-items: center;

      li {
        :hover {
          background: ${({ theme }) => theme.COLORS.BLUE};
          color: #FFFFFF;
          border-radius: 8px;
          padding: 10px;
          font-weight: 600;
        }

        a {
          transition: all 0.5s;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }

    > div {
      justify-content: start;
      
      img {
        width: auto;
      }
    }
  }
  }

  @media (min-width: 1440px) {
    > nav {
      padding: 50px 150px 20px;
    }
  }

  @media (min-width: 1680px) {
    > nav {
      
    }
  }
`