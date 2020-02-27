import React from "react"
import Icon from "@material/react-material-icon"
import { useSelector, useDispatch } from 'react-redux'

import { Container, Popup, TopBar, Content } from './popup-window__styles'
import Separator from '../separator'
import Button from '../small-button'
import withClick from '../../HOC/withClick'
import { setPopupWindowInactive } from '../../../Redux/actions'


const ClickableButton = withClick( Button );

export default () => {

  const { title, messenge } = useSelector( s => s.popup );
  const dispatch = useDispatch();

  return(
    <Container>

      <Popup>
        <TopBar>
          <Icon icon = 'report' />
          <Separator width = '10px' />
          <p>{ title }</p>
        </TopBar>
        <Content>
          { messenge }
          <Separator height = '20px' />
          <ClickableButton onClickFunction = { () => dispatch( setPopupWindowInactive() ) }>
            ok
          </ClickableButton>
        </Content>
      </Popup>

    </Container>
  )
}