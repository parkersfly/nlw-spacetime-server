import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 5px 21px;
  border-radius: 8px;
  
  justify-content: center;

  margin: 5px 0;
  
  color: #FFFFFF;
  background: ${({ theme }) => theme.COLORS.BLUE};

  align-items: center;
  gap: 12px;
`