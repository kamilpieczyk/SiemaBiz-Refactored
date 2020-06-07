import store from '../Redux/store';

const getMenu = () => {
  const state = store.getState();
  const language = state.language.source.menu;

  const menu = [
    {
      title: language.home,
      icon: 'home',
      image: '/images/home.svg',
      href: '/',
    },
    {
      title: language.articles,
      icon: 'vertical_split',
      image: '/images/articles.svg',
      href: '/articles-page?site=1',
    },
    {
      title: language.cathalog,
      icon: 'import_contacts',
      image: '/images/job.svg',
      href: '/companies-cathalogue?site=1',
    },
    {
      title: language.cooperationOffers,
      icon: 'business_center',
      image: '/images/business.svg',
      href: '/cooperation-offers',
    },
    {
      title: language.jobOffers,
      icon: 'next_week',
      image: '/images/interview.svg',
      href: '/job-offers?site=1',
    },
    {
      title: language.makeApoitment,
      icon: 'insert_invitation',
      image: '/images/apoitment.svg',
      href: '/makeapoitment',
    },
    {
      title: language.contact,
      icon: 'contact_mail',
      image: '/images/contact.svg',
      href: '/contacts',
    },
  ];
  return menu;
};

export default getMenu;
