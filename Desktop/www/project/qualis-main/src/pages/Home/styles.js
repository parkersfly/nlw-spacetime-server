import styled from "styled-components";

export const Container = styled.div`

  .desktop {
    display: none;
  }
  
  .bannerDetails {
    flex-direction: column;
  }

  .mapDivisorOne {
    display: none;
  }

  .mapDivisorTwo {
      iframe {
        width: 100px;
        border: none;
        border-radius: 0 8px 8px 0;
      }
    }

    .callMe {
    position: fixed;
    bottom: 10px;
    right: 10px;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    z-index: 3;

    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.GOLD_100};

    > a {
      height: 20px;
    }
  }

  .whatsappLogo {
    position: fixed;
    bottom: 62px;
    right: 10px;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    z-index: 3;

    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.GREEN};

    > a {
      height: 20px;
    }
  }

  .banner {
    height: 570px;

    margin: 70px 0;

    padding: 20px;
    justify-content: space-around;

    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};

    h3 {
      text-align: ;
      font-size: 37px;
      line-height: 40px;

      margin-bottom: 10px;

      span {
        color: ${({ theme }) => theme.COLORS.GOLD};
        font-weight: bold;
        font-size: 43px;
      }
    }

    .bannerDetails {
      
    }

    .bannerDescription {
      gap: 70px;

      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }

  .depositions {
    .depositionsTitle {
      margin: 0 20px;
      justify-content: center;
      align-items: center;
      background: #0E3F5B;
      padding: 10px;
      border-radius: 5px;

      h3 {
        color: #FFFFFF;
        font-size: 24px;
        text-transform: uppercase;
      }
    }

    .depositionsVideo {
      align-items: center;
      padding: 30px;
      height: 390px;
      background: linear-gradient(to bottom, #FFF 0%, #FFF 40%, ${({ theme }) =>
        theme.COLORS.BLUE} 40%, ${({ theme }) => theme.COLORS.BLUE} 100%);
    
      div {
        width: 100%;
        height: 230px;
        background: #F1F1F1;
        border-radius: 8px;
      }
    }
    
  }

  .locale {

  padding: 0 20px;
  margin-top: 100px;


  h3 {
    font-size: 33px;
    text-align: center;
  
  span {
    color: ${({ theme }) => theme.COLORS.GOLD};
  }
}

.map {
  margin-top: 50px;

  justify-content: center;
}

.mapDivisorTwo {
  width: 100%;
}
}

  /******************************************************
                        Media Queries
  *******************************************************/

  @media (min-width: 768px) {
    .banner {
      height: 840px !important;
      text-align: center;

      h3 {
        font-size: 40px !important;
      }
    }
  }

  @media (min-width: 1024px) {

    .whatsappLogo {
      width: 64px !important;
      height: 64px !important;

      bottom: 78px !important;
    }

    .callMe {
    position: fixed;
    bottom: 40px;
    right: 48px;

    width: 64px !important;
    height: 64px !important;
    border-radius: 50%;

    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.GOLD_100};

    > a {
      height: 20px;
    }
  }

  > header {
    padding: 20px 160px;
  }

  .banner {
    height: 705px !important;

    margin: 100px 0;

    padding: 50px !important;
    justify-content: space-around;

    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};

    h3 {
      text-align: center;
      font-size: 35px;

      span {
        color: ${({ theme }) => theme.COLORS.GOLD};
        font-weight: bold;
        font-size: 40px;
      }
    }

    .bannerDetails {
      flex-direction: row;
      gap: 50px;
    }
    
    .bannerDescription {
      
      gap: 70px;

      .desktop {
        display: block;
      }

      p {
        font-size: 17px !important;
        text-align: justify !important;
      }
    }
  }

  .depositions {
    .depositionsTitle {
      width: 530px;
      justify-content: center;
      align-items: center;
      margin-bottom: 113px;
      background: #0E3F5B;
      padding: 10px;
      border-radius: 0 5px 5px 0;
      margin-left: 160px;

      h3 {
        color: #FFFFFF;
        font-size: 24px;
        text-transform: uppercase;
      }
    }

    .depositionsVideo {
      align-items: center !important;
      padding: 50px !important;
      height: 543px !important;
      background: linear-gradient(to bottom, #FFF 0%, #FFF 40%, ${({ theme }) =>
        theme.COLORS.BLUE} 40%, ${({ theme }) => theme.COLORS.BLUE} 100%);
    
      div {
        width: 100%;
        height: 300px !important;
        background: #F1F1F1;
        border-radius: 8px;
      }
    }
    
  }

  .locale {

    padding: 0 50px !important;
    margin-top: 150px;

    
    h3 {
      font-size: 35px;
      text-align: center;
      
      span {
        color: ${({ theme }) => theme.COLORS.GOLD};
      }
    }
    
    .map {
      margin-top: 100px;
      
      .desktop {
        display: block;
      }
    }
    
    .mapDivisorOne {


      width: 600px;
      height: 350px;

      padding: 50px;

      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.WHITE};

      border-radius: 8px 0 0 8px;

      p {
        font-size: 32px;
        font-weight: 500;
      }
    }

    .mapDivisorTwo {
      iframe {
        width: 600px;
        height: 350px !important;
        border: none;
        border-radius: 0 8px 8px 0;
      }
    }
  }
  }

  @media (min-width: 1440px) {
    
  }

`;
export const Content = styled.div`
  .desktop {
    display: none;
  }

  padding: 20px;

  > main {
    gap: 30px;
    img {
      width: 100px;
    }
  }

  .ratingUserGroup {
    img {
      width: 100px;
    }
  }

  .groupTags {
    width: 100%;
    align-items: center;
  }

  .welcome {
    gap: 40px;
  }

  .welcomeText {
    gap: 20px;

    div {
      justify-content: center;
      align-items: center;
      height: 150px;
      box-shadow: 4px 4px 2px 1px #212123;
      border-radius: 5px;

      h1 {
        font-size: 20px;
        text-align: center;
        line-height: 26px;

        span {
          color: ${({ theme }) => theme.COLORS.GOLD};
        }
      }
    }

    p {
      font-size: 11px;
      font-weight: 500;
      text-align: center;
    }
  }

  .options {
    height: 260px;
    padding: 26px;
    background: ${({ theme }) => theme.COLORS.GRAY};
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.11);

    ul {
      height: 100%;
      justify-content: space-around;

      border-radius: 5px;
      gap: 30px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 15px;
        font-weight: 600;
      }
    }
  }

  .services {
    > div:first-child {
      justify-content: center;
      align-items: center;

      background: ${({ theme }) => theme.COLORS.BLUE};
      padding: 10px;
      border-radius: 5px;

      h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-transform: uppercase;
      }
    }
  }

  .rating {
    margin-top: 50px;

    h3 {
      font-size: 33px;
      text-align: center;

      span {
        color: ${({ theme }) => theme.COLORS.GOLD_100};
      }
    }

    .rating-content {
      height: 300px;
      justify-content: space-around;
    }

    .pointing {
      align-items: center;
      justify-content: center;
      gap: 25px;

      strong {
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.BLUE};
      }
    }

    .ratingUserGroup {
      margin-top: 15px;

      img {
        width: 100%;
      }
    }
  }

  /******************************************************
                      Swiper 
*******************************************************/

  .swiper-pagination {
    display: none;
  }

  .swiper-wrapper {
    padding: 10px;
  }

  /******************************************************
                Media Queries Content
*******************************************************/

  @media (min-width: 375px) {
    .welcomeText {
      h1 {
        font-size: 24px !important;
      }
    }
  }

  @media (min-width: 425px) {
    .options {
      ul {
        li {
          font-size: 18px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .welcomeText {
      div {
        height: 173px;
      }

      h1 {
        font-size: 33px !important;
        line-height: 42px !important;
      }

      p {
        font-size: 14px;
      }
    }

    .services {
      > div {
        margin-bottom: 50px;
      }
    }

    .rating-content {
      h3 {
        font-size: 40px;
      }
    }

    .options {
      height: 210px;

      ul {
        flex-direction: row;
        flex-wrap: wrap;

        li {
          font-size: 20px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .desktop {
      display: block;
    }

    gap: 45px;

    padding: 0 50px;

    .welcome {
      gap: 35px;
    }

    .welcomeText {
      gap: 15px;

      h1 {
        font-size: 28px !important;
        text-align: justify;
        line-height: 50px;

        span {
          color: ${({ theme }) => theme.COLORS.GOLD};
        }
      }

      p {
        font-weight: 500;
        text-align: justify;
      }
    }

    .options {
      height: 155px;
      padding: 26px;
      background: ${({ theme }) => theme.COLORS.GRAY};
      box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.11);

      grid-area: options;

      ul {
        border-radius: 5px;

        li {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 21px;
          font-weight: 600;
        }
      }
    }

    > main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "welcome image"
        "options options";
      place-items: center;
      row-gap: 50px;

      margin-top: 15px;

      .intro {
        grid-area: welcome;
      }

      img {
        grid-area: image;
        width: 88%;
      }
    }

    .services {
      > div:first-child {
        width: 530px;
        justify-content: center;
        align-items: center;

        margin-bottom: 113px;

        background: ${({ theme }) => theme.COLORS.BLUE};
        padding: 10px;
        border-radius: 5px;

        h2 {
          color: ${({ theme }) => theme.COLORS.WHITE};
          text-transform: uppercase;
        }
      }
    }

    .rating {
      margin-top: 50px;

      display: grid;
      grid-template-columns: 50% 50%;

      h3 {
        font-size: 35px;
        text-align: justify;

        span {
          color: ${({ theme }) => theme.COLORS.GOLD_100};
        }
      }

      .rating-content {
        height: 300px;
        justify-content: space-between;
      }

      .pointing {
        align-items: center;
        gap: 25px;

        strong {
          font-size: 50px;
          color: ${({ theme }) => theme.COLORS.BLUE};
        }
      }

      .ratingUserGroup {
        display: flex;
        justify-content: end;
        align-items: center;

        img {
          width: 90%;
        }
      }
    }

    /*---------------------------------------------
                      Slider logos
  -----------------------------------------------*/

    @keyframes slide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }

    .logos {
      overflow: hidden;
      padding: 0;
      background: white;
      white-space: nowrap;
      position: relative;

      margin: 50px 0;
    }

    .logos:before,
    .logos:after {
      position: absolute;
      top: 0;
      width: 250px;
      height: 100%;
      content: "";
      z-index: 2;
    }

    .logos:before {
      left: 0;
      background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
    }

    .logos:after {
      right: 0;
      background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
    }

    /*-
.logos:hover .logos-slide {
  animation-play-state: paused;
}*/

    .logos-slide {
      display: inline-block;
      animation: 35s slide infinite linear;
    }

    .logos-slide img {
      height: 50px;
      margin: 0 40px;
    }

    /******************************************************
                      Swiper 
*******************************************************/

    .swiper-pagination {
      display: none;
    }

    .swiper-wrapper {
      padding: 10px;
    }
  }

  @media (min-width: 1440px) {
    .welcomeText {
      > div {
        height: 270px;

        h1 {
          font-size: 40px !important;
          line-height: 55px !important;
        }
      }
      > p {
        font-size: 15px !important;
      }
    }

    .rating-content {
      h3 {
        font-size: 38px !important;
        text-align: start;
        margin-left: 50px;
      }
    }
  }

  @media (min-width: 1920px) {
    gap: 30px;
    padding: 0px 150px;

    .welcomeText {
      div {
        height: 200px;
      }
    }

    > main {
      place-items: start;
      row-gap: 15px;

      img {
        width: 60%;
      }
    }
    .options {
      width: 785px;
    }
  }
`;
