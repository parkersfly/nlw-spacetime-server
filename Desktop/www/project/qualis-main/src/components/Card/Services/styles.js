import styled  from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  background: ${({ theme }) => theme.COLORS.WHITE};

  text-align: center;
  padding: 32px 15px;

  width: 100%;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

    > img {
      width: 71px;
      height: 71px;  
    }

    > a {
      background: ${({ theme }) => theme.COLORS.GREEN};
      color: ${({ theme }) => theme.COLORS.WHITE};

      box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.11);

      border-radius: 5px;
      padding: 20px;

      display: flex;
      justify-content: center;
      align-items: center; 
      gap: 10px;
    }

`