import colors from './colors'

export const backdropFilter = ( rest ) => `

background: ${ colors.transparentWhiteMozilla };

  @supports( backdrop-filter: blur() ){
    backdrop-filter: blur( 8px );
    background: ${ colors.transparentWhite };

    ${ rest }
  }
`

export const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`