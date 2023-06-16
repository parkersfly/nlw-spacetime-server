import styled from 'styled-components'

export const Container = styled.footer`

  margin-top: 50px;
  
  > p {
    font-size: 12px;
    text-align: center;

    padding: 20px;
  }

  .contact {
    justify-content: space-between;
    align-items: center;
    padding: 50px;

    background: ${({ theme }) => theme.COLORS.BLUE};

    div {
      height: 200px;
      gap: 30px;

      > strong {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    } 
  }

  .contactList {
    gap: 20px;

    li {
      display: flex;
      align-items: center;
      gap: 15px;

      color: ${({ theme }) => theme.COLORS.WHITE};
      
      a {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }

`