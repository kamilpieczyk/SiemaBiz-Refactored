import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Container, Content } from './sidebar-box__style';
import Item from './menu-item';

const SidebarBox = ({ menu, light }) => {
  const userPrivileges = useSelector(s => s.user.privileges);
  return (
    <Container light={light}>
      <Content>
        {menu.map((item, index) => {
          if (item.priv) {
            if (item.priv <= userPrivileges)
              return (
                <Item light={light} key={index} icon={item.icon} href={item.href}>
                  {item.title}
                </Item>
              );
          } else
            return (
              <Item light={light} key={index} icon={item.icon} href={item.href}>
                {item.title}
              </Item>
            );
        })}
      </Content>
    </Container>
  );
};

SidebarBox.propTypes = {
  menu: PropTypes.array.isRequired,
  light: PropTypes.bool,
};

export default SidebarBox;
