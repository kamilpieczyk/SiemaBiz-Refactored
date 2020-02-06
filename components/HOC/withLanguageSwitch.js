import React from 'react'


const withLanguage = ( Component ) => {

  const ComponentWithLanguage = () => {

    const handleLanguageChanger = () => {
      console.log( 'działam' )
    }

    return(
      <div onClick = { handleLanguageChanger } >
        <Component text = 'PL' />
      </div>
    )
  }

  return ComponentWithLanguage
}

export default withLanguage