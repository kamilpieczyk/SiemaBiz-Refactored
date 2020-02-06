import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeLanguageToPL, changeLanguageToENG } from '../../Redux/actions'

const withLanguage = ( Component ) => {

  const ComponentWithLanguage = () => {

    const language = useSelector( state => state.language )
    const dispatch = useDispatch()

    const handleLanguageChanger = () => {
      if( language === "PL" ){
        return changeLanguageToENG()
      }
      else {
        return changeLanguageToPL()
      }
    }

    return(
      <div onClick = { () => dispatch( handleLanguageChanger() ) } >
        <Component text = { language } />
      </div>
    )
  }

  return ComponentWithLanguage
}

export default withLanguage