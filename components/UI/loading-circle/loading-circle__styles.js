import styled from "styled-components"
import colors from "../../../styles/colors"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${
    ({ margin }) => margin ? margin : 0
  }
`

export const CircleContainer = styled.div`
    
  animation: rotation 1s 0s infinite linear;
    
  @keyframes rotation {
    0%{
      transform: rotate( 0deg );
    }
    100%{
      transform: rotate( 365deg );
    }
  }
`

export const Text = styled.div`
  color: ${ ( { color } ) => color ? color : colors.white };
`