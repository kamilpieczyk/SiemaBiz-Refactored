import store from '../Redux/store';

const getCategories = () => {
  const state = store.getState();
  const languageSource = state.language.source.general.categories;

  const categories = [
    {
      name: 'top-ten-tips',
      title: languageSource.topTenTips,
      href: 'articles-page?site=1&category=toptentips',
      icon: 'format_list_numbered',
    },
    {
      name: 'videos',
      title: languageSource.videos,
      href: 'articles-page?site=1&category=videos',
      icon: 'subscriptions',
    },
    {
      name: 'news',
      title: languageSource.news,
      href: 'articles-page?site=1&category=news',
      icon: 'language',
    },
    {
      name: 'social-media',
      title: languageSource.socialMedia,
      href: 'articles-page?site=1&category=socialmedia',
      icon: 'people',
    },
    {
      name: 'business',
      title: languageSource.business,
      href: 'articles-page?site=1&category=business',
      icon: 'work',
    },
    {
      name: 'law',
      title: languageSource.law,
      href: 'articles-page?site=1&category=law',
      icon: 'gavel',
    },
    {
      name: 'technology',
      title: languageSource.technology,
      href: 'articles-page?site=1&category=technology',
      icon: 'usb',
    },
    {
      name: 'tips',
      title: languageSource.tips,
      href: 'articles-page?site=1&category=tips',
      icon: 'wb_incandescent',
    },
    {
      name: 'united-kingdom',
      title: languageSource.unitedKingdom,
      href: 'articles-page?site=1&category=unitedkingdom',
      icon: 'my_location',
    },
    {
      name: 'poland',
      title: languageSource.poland,
      href: 'articles-page?site=1&category=poland',
      icon: 'flight',
    },
    {
      name: 'general',
      title: languageSource.general,
      href: 'articles-page?site=1&category=general',
      icon: 'info',
    },
  ];

  return categories;
};

export const translateCategory = categoryName => {
  const categories = getCategories();
  let categoryTranslatedName;

  for (const category of categories) {
    if (category.name === categoryName) {
      categoryTranslatedName = category.title;
    }
  }

  return categoryTranslatedName;
};

export default getCategories;
