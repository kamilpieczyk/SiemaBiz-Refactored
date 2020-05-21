import React from "react"
import Icon from "@material/react-material-icon"
import { useSelector, useDispatch } from 'react-redux'

import { Container, Popup, TopBar, Content } from './choice-window__styles'
import Separator from '../separator'
import Button from '../small-button'
import withClick from '../../HOC/withClick'
import { setChoiceWindowInactive} from '../../../Redux/actions'


const ClickableButton = withClick( Button );

export default () => {

  const { question, yesFunction } = useSelector( s => s.choiceWindow );
  const language = useSelector( s => s.language.source );
  const dispatch = useDispatch();

  return(
    <Container>

      <Popup>
        <TopBar>
          <Icon icon = 'report' />
          <Separator width = '10px' />
          <p>{ question }</p>
        </TopBar>
        <Content>
          <ClickableButton onClickFunction = { () => yesFunction() }>
            { language.general.yes }
          </ClickableButton>
          <Separator width = '10px'/>
          <ClickableButton onClickFunction = { () => dispatch( setChoiceWindowInactive() ) }>
            { language.general.no }
          </ClickableButton>
        </Content>
      </Popup>

    </Container>
  )
}