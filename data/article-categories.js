import store from '../Redux/store'

const getCategories = () => {

  const state = store.getState();
  const languageSource = state.language.source.general.categories;

  const categories = [
    {
      name: 'top-ten-tips',
      title: languageSource.topTenTips,
      url: '',
    },
    {
      name: 'videos',
      title: languageSource.videos,
      url: '',
    },
    {
      name: 'news',
      title: languageSource.news,
      url: '',
    },
    {
      name: 'social-media',
      title: languageSource.socialMedia,
      url: '',
    },
    {
      name: 'business',
      title: languageSource.business,
      url: '',
    },
    {
      name: 'law',
      title: languageSource.law,
      url: '',
    },
    {
      name: 'technology',
      title: languageSource.technology,
      url: '',
    },
    {
      name: 'tips',
      title: languageSource.tips,
      url: '',
    },
    {
      name: 'united-kingdom',
      title: languageSource.unitedKingdom,
      url: '',
    },
    {
      name: 'poland',
      title: languageSource.poland,
      url: '',
    },
    {
      name: 'general',
      title: languageSource.general,
      url: '',
    },
  ];
  
  return categories;
}

export default getCategories;