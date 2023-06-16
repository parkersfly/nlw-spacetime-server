import styled from 'styled-components'

export const Container = styled.button`
  width: 100%; 
  height: 68px;

  justify-content: center;
  align-items: center;
  gap: 15px;

  background: ${({ theme }) => theme.COLORS.GREEN};
  border-radius: 5px;
  border: none;

  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.11);

  p {
    font-weight: 600;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`