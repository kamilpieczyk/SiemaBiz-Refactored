import React from "react"
import Icon from "@material/react-material-icon"

import { Container, CircleContainer, Text } from './loading-circle__styles'

export default ( { color, text, margin } ) => {

    return(
      <Container margin = { margin } >
        <CircleContainer id="icon-container">
            <Icon 
              icon="refresh"
              style = { { color, fontSize: '3rem' } }
            />
        </CircleContainer>
        { text && <Text color={ color } >{ text }</Text> }
      </Container>
    )
}