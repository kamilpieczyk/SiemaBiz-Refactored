import store from '../Redux/store';

export const getAdminPanelMenu = () => {
  const state = store.getState();
  const language = state.language.source.administrationPanel;

  const menu = [
    {
      title: language.articleList,
      icon: 'list',
      href: '/user-panel/administration-panel?page=articles',
    },
    {
      title: language.companyManagement,
      icon: 'business_center',
      href: '/user-panel/administration-panel?page=company',
    },
    {
      title: language.apoitments,
      icon: 'people',
      href: '/user-panel/administration-panel?page=apoitments',
    },
    {
      title: language.adminPanel,
      icon: 'admin_panel_settings',
      href: '/user-panel/administration-panel?page=admin',
    },
  ];

  return menu;
};

const adminPanelMenu = getAdminPanelMenu();

export default adminPanelMenu;
