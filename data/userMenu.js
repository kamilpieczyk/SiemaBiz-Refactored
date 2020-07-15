import store from '../Redux/store';

const getMenu = () => {
  const state = store.getState();
  const language = state.language.source.navbar.usermenu;

  const menu = [
    {
      title: language.profilrSettings,
      icon: 'person_pin',
      href: '/user-panel/profile-settings',
      priv: '225801',
    },
    {
      title: language.articles,
      icon: 'vertical_split',
      href: '/user-panel/administration-panel?page=articles',
      priv: '225803',
    },
    {
      title: language.manageCompanies,
      icon: 'business_center',
      href: '/user-panel/administration-panel?page=company',
      priv: '225801',
    },
    {
      title: language.manageApoitments,
      icon: 'people',
      href: '/user-panel/administration-panel?page=apoitments',
      priv: '225805',
    },
    {
      title: language.adminPanel,
      icon: 'admin_panel_settings',
      href: '/user-panel/administration-panel?page=admin',
      priv: '225805',
    },
  ];
  return menu;
};

export default getMenu;
