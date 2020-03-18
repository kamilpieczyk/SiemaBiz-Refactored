import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content } from './sidebar-box__style'
import Item from './menu-item'

const SidebarBox = ({ menu }) => {

  return(
  
    <Container>
      <Content>
        {
          menu.map( ( item, index ) => (
            <Item key = { index } icon = { item.icon } href = { item.href } >
              { item.title }
            </Item>
          ) )
        }
      </Content>
    </Container>
    
  )
}

SidebarBox.propTypes = {
  menu: PropTypes.array.isRequired
}

export default SidebarBox