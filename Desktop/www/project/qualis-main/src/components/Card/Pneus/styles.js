import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    gap: 20px;
    
    background: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 20px;
    margin-top: 25px;

    > div {
        gap: 15px;

      >  p {
            text-align: center;
            font-weight: 600;
            font-size: 12px;
        }
    }

    > h3 {
        font-size: 40px;
        color: ${({ theme }) => theme.COLORS.GOLD_100};
    }

    button {
        width: 100%;
        height: 50px;

        background: ${({ theme }) => theme.COLORS.GREEN};
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
        border-radius: 5px;

        a {
            justify-content: center;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.WHITE};

            font-size: 20px;
            font-weight: 500;
            gap: 10px;
        }
    }

    .time {
        align-items: center;
        justify-content: center;

        p:nth-child(2) {
            color: ${({ theme }) => theme.COLORS.GOLD_100};
        }
    }

    .priceGroup {
        align-items: center;
        justify-content: space-between;

        .price {

            

            p {
                font-size: 20px;
                font-weight: 500;
                color: ${({ theme }) => theme.COLORS.GOLD_100};
            }
            
            strong {
                font-size: 32px;
            }
            
            strong:nth-child(2) {
                text-decoration: line-through;
                text-decoration-color: #FF0000;
            }
        }

        img {
            width: 200px;
            margin-left: -48px;

        }
    }

    h3 {
        text-transform: uppercase;
    }

    
`