import styled from "styled-components";
import flag from "../../assets/flag.svg";

import backgroundpneus from '../../assets/backgroundpneus.png'

export const Container = styled.div`

  height: 100vh;

  .swiper {
    padding: 10px;
  }

  .swiper-pagination {
    display: none;
  }

  .pneusForSale {
    padding: 20px;
  }

  .groupAll {
    gap: 20px;

    ul {
      gap: 10px;
      margin-top: 15px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      li {
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
          path {
            stroke: ${({ theme }) => theme.COLORS.WHITE};
          }
        }
      }
    }

    .services {

      .backgroundServices {
        background-image: url(${backgroundpneus});
        background-size: cover;
        padding: 10px;
      }

      > div:nth-child(1) {     
        
        width: 100%;

        padding: 20px;
        gap: 10px;
        
        h3 {
          width: 100%;
          text-transform: uppercase;
          
          justify-content: center;
          align-items: center;

          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 24px;

          padding: 20px;
          background: ${({ theme }) => theme.COLORS.GOLD_100};
          border-radius: 8px;
        }
      }
    }
  }

  .groupTags {
    padding: 10px 10px 0;
  }

  #banner {
    position: relative;

    padding: 20px;

    > h1 {
      margin-top: 110px;
      font-size: 41px;
    }

    .flag {
      width: 283px;
      height: 260px;

      display: flex;
      justify-content: end;

      position: absolute;
      top: -25px;
      right: 0;

      background-image: url(${flag});
      background-repeat: no-repeat;

      .flag-time {

        margin-right: 2px;

        .flagTimer {
          color: ${({ theme }) => theme.COLORS.BLACK};
          margin: 92px 0 0 147px;
          transform: rotate(31.45deg);

          font-size: 24px;
          font-weight: 700;
        }

        > p:last-child {
          color: ${({ theme }) => theme.COLORS.WHITE};
          transform: rotate(31.45deg);

          overflow: hidden;

          font-size: 20px;
          font-weight: 700;
          
          margin-left: 37px;
        }
      }
    }

     {
      /* Teste 

    &:after {
      content: "";
      position: absolute;
      width: 283px;
      height: 260px;

      top: 0;
      right: 0;
      
      background-image: url(${flag});
      background-repeat: no-repeat;
    } */
    }

    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};

      span {
        color: ${({ theme }) => theme.COLORS.GOLD_100};
      }
    }

    width: 100%;
    height: 1100px;

    background: linear-gradient(
      180deg,
      #212123 0%,
      #212123 43.25%,
      rgba(196, 196, 196, 0) 100%
    );
  }

  .locale {
    gap: 50px;
    padding: 20px;

    h3 {

      text-align: center;
      font-size: 30px;

      span {
        color: ${({ theme }) => theme.COLORS.GOLD_100};
      }
    }
  }

  /***************************************************
                          Media
  ****************************************************/

  @media (min-width: 425px) {
    .groupAll {
      ul {
        font-size: 20px;
      }
    }

    #banner {
      h1 {
        font-size: 50px;
        line-height: 52px;
      }
    }
  }

  @media (min-width: 768px) {
    #banner {
      h1 {
        font-size: 103px;
        line-height: 95px;
        margin-top: 70px;
      }
    }

    .groupAll {
      ul {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      }
    }
  }

  @media (min-width: 1024px) {
    #banner {
      padding: 50px;
    }

    .groupTags {
      width: max-content;
      padding: 10px 50px 0;
    }

    .services {
      > div:nth-child(1){
          padding: 50px !important;
          
        h3 {
           width: 50% !important;
        }
      }
    }

    .pneusForSale {
      padding: 40px;
    }

    .backgroundServices {
      padding: 50px !important;
    }

    .locale {
      padding: 50px;
    }
  }

  @media (min-width: 1440px) {
    .groupTags {
      padding: 10px 0 10px 150px;
    }

    #banner {
      padding: 20px 150px;
    }

    .pneusForSale {
      padding: 20px 150px;
    }

    .backgroundServices {
      padding: 50px 150px !important;
    }

    .services {
      > div:nth-child(1){
          padding: 50px 150px !important;
      }
    }

    .locale {
      padding: 50px 150px;
    }
  } 

  
`;
