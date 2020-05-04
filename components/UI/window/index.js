import React from "react"
import MaterialIcon from "@material/react-material-icon"

import { 
  Container,
  TopBar,
  ContentWindow
 } from './window__styles'

const Window = ( { close, width, height, children } ) => {

  return(
    <Container>

      <TopBar width={ width } >
        <MaterialIcon icon='close' onClick={ close } />
      </TopBar>

      <ContentWindow width={ width } height={ height }>
        { children }
      </ContentWindow>

    </Container>
  )

}

export default Window;