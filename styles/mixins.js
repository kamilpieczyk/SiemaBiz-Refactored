import colors from './colors'

export const backdropFilter = () => `
  @supports( backdrop-filter: blur() ){
    backdrop-filter: blur( 5px );
    background: ${ colors.transparentWhite };
  }
`

export const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`