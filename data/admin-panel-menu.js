import store from '../Redux/store';

export const getAdminPanelMenu = () => {
  const state = store.getState();
  const language = state.language.source.administrationPanel;

  const menu = [
    {
      title: language.articleList,
      icon: 'list',
      href: 'user-panel/administration-panel?page=articles',
      priv: 225803,
    },
    {
      title: language.companyManagement,
      icon: 'business_center',
      href: 'user-panel/administration-panel?page=company',
      priv: 225801,
    },
    {
      title: language.apoitments,
      icon: 'people',
      href: 'user-panel/administration-panel?page=apoitments',
      priv: 225805,
    },
    {
      title: language.adminPanel,
      icon: 'admin_panel_settings',
      href: 'user-panel/administration-panel?page=admin',
      priv: 225805,
    },
  ];

  return menu;
};

const adminPanelMenu = getAdminPanelMenu();

export default adminPanelMenu;
