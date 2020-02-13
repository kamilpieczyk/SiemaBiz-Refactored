import { useSelector } from 'react-redux'

export default ({ render }) => {
  
  const languageSource = useSelector( state => state.language.source )
  const isPageScrolled = useSelector( state => state.isPageScrolled )

  return render({
    source: languageSource,
    isPageScrolled
  })
}