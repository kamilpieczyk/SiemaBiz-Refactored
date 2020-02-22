import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content, SideMenu } from './user-panel__styles'
import SidebarBox from '../UI/sidebar-box'

const UserPanelPresentationLayer = ({ device, menu, children }) => (
  <Container device = { device } >

    <Content>
      { children }
    </Content>
    <SideMenu>
    <SidebarBox menu = { menu } />
    </SideMenu>

  </Container>
)

UserPanelPresentationLayer.propTypes = {
  children: PropTypes.element,
  device: PropTypes.string,
  menu: PropTypes.array.isRequired,
}

export default UserPanelPresentationLayer