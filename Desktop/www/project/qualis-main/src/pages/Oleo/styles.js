import styled from "styled-components";
import flag from "../../assets/flag.svg";

export const Container = styled.div`
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

          font-size: 26px;
          font-weight: 700;
          
          margin-left: 37px;
        }
      }
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
`;
