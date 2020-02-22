import colors from './colors'

export const backdropFilter = () => `
  @supports( backdrop-filter: blur() ){
    backdrop-filter: blur( 5px );
    background: ${ colors.transparentWhite };
  }
`