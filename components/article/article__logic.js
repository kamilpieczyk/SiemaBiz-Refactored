import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { translateCategory } from '../../data/article-categories'

const ArticleLogicLayer = ({ render, article }) => {
  const language = useSelector( s => s.language.source );
  const breadcrumbs = [
    language.menu[0].title,
    language.articlesPage.title
  ];
  const category = translateCategory( article.category );

  return render({
    breadcrumbs,
    category
  })
}

ArticleLogicLayer.propTypes = {
  render: PropTypes.func.isRequired
}

export default ArticleLogicLayer;