import store from '../Redux/store'

export const getAdminPanelMenu = () => {

  const state = store.getState();
  const language = state.language.source.administrationPanel;

  const menu = [
    {
      title: language.articleList,
      icon: 'list',
      href: '/user-panel/administration-panel?page=articles'
    },
    {
      title: language.companyManagement,
      icon: 'business_center',
      href: '/user-panel/administration-panel?page=company'
    },

  ];
  
  return menu;
}

const adminPanelMenu = getAdminPanelMenu();

export default adminPanelMenu;