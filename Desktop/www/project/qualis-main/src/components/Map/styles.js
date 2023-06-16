import styled from 'styled-components'

export const Container = styled.div`
  iframe {
    width: 100%;
    height: 250px;
    border: none;
    border-radius: 0 8px 8px 0;
  }

  @media (min-width: 768px) {
    iframe {
      height: 360px;
    }
  }
`