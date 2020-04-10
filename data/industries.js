import store from '../Redux/store'

const getIndustries = () => {

  const state = store.getState();
  const languageSource = state.language.source.general.industries;

  const industries = [
    {
      name: 'software-development',
      title: languageSource.softwareDevelopment,
      href: 'companies-cathalogue?site=1&industry=software-development',
      icon: 'code'
    },
    {
      name: 'construction-industry',
      title: languageSource.constructionIndustry,
      href: 'companies-cathalogue?site=1&industry=construction-industry',
      icon: 'home_work'
    },
    {
      name: 'IT',
      title: languageSource.it,
      href: 'companies-cathalogue?site=1&industry=it',
      icon: 'computer'
    },
    {
      name: 'transport',
      title: languageSource.transport,
      href: 'companies-cathalogue?site=1&industry=transport',
      icon: 'local_shipping'
    },
    {
      name: 'automotive',
      title: languageSource.automotive,
      href: 'companies-cathalogue?site=1&industry=automotive',
      icon: 'directions_car'
    },
    {
      name: 'trade',
      title: languageSource.trade,
      href: 'companies-cathalogue?site=1&industry=trade',
      icon: 'attach_money'
    },
    {
      name: 'manufacturing',
      title: languageSource.manufacturing,
      href: 'companies-cathalogue?site=1&industry=manufacturing',
      icon: 'business'
    },
    {
      name: 'banking',
      title: languageSource.banking,
      href: 'companies-cathalogue?site=1&industry=banking',
      icon: 'account_balance'
    },
    {
      name: 'education',
      title: languageSource.education,
      href: 'companies-cathalogue?site=1&industry=education',
      icon: 'school'
    },
    {
      name: 'eletric-utilities',
      title: languageSource.eletricUtilities,
      href: 'companies-cathalogue?site=1&industry=eletric-utilities',
      icon: 'flash_on'
    },
    {
      name: 'farming',
      title: languageSource.farming,
      href: 'companies-cathalogue?site=1&industry=farming',
      icon: 'filter_vintage'
    },
    {
      name: 'beauty',
      title: languageSource.beauty,
      href: 'companies-cathalogue?site=1&industry=beauty',
      icon: 'spa'
    },
    {
      name: 'law',
      title: languageSource.law,
      href: 'companies-cathalogue?site=1&industry=law',
      icon: 'gavel'
    },
    {
      name: 'health-services',
      title: languageSource.healthServices,
      href: 'companies-cathalogue?site=1&industry=health-services',
      icon: 'local_hospital'
    },
    {
      name: 'food-industry',
      title: languageSource.foodIndustry,
      href: 'companies-cathalogue?site=1&industry=food-industry',
      icon: 'restaurant_menu'
    },
  ];
  
  return industries;
}

export const translateIndustry = ( categoryName ) => {
  const industries = getIndustries();
  let industrieTranslatedName;

    for( const industry of industries ){
      if( industry.name === categoryName ){
        industrieTranslatedName = industry.title;
      }
    }
    
  return industrieTranslatedName;
}

export default getIndustries;