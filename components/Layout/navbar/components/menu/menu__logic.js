import { useSelector } from 'react-redux'

export default ({ render }) => {
  
  const languageSource = useSelector( state => state.language.source )

  return render({
    source: languageSource
  })
}