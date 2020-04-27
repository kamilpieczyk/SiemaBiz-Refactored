import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content, SideMenu, SideMenuExtender } from './user-panel__styles'
import SidebarBox from '../UI/sidebar-box'

const UserPanelPresentationLayer = ({ device, menu, children, isScrolled }) => (
  <Container device = { device } >

    <Content>
      { children }
    </Content>
    { isScrolled && <SideMenuExtender /> }
    <SideMenu isScrolled = { isScrolled }>
      <SidebarBox menu = { menu } />
    </SideMenu>

  </Container>
)

UserPanelPresentationLayer.propTypes = {
  children: PropTypes.node,
  device: PropTypes.string,
  menu: PropTypes.array.isRequired,
  isScrolled: PropTypes.bool
}

export default UserPanelPresentationLayer