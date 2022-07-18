import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import get from '../../API/get';
import articleCategories from '../../data/article-categories';

const ArticlesLogicLayer = ({ render, articles }) => {
  const language = useSelector(s => s.language.source);

  const sidebar = articleCategories();
  sidebar.unshift({
    name: 'wszystkie',
    title: language.general.categories.all,
    href: 'articles-page?site=1',
    icon: 'all_inclusive',
  });

  return render({
    articles,
    sidebar,
  });
};

ArticlesLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
};

export default ArticlesLogicLayer;
