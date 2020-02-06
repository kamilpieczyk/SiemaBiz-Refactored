import { memo, useEffect, useState } from 'react'

export default memo( (props) => {

  const [ scrollY, setScrollY ] = useState( 0 )

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      const scrlY = window.scrollY
      setScrollY( scrlY )
    } )
  }, [] )

  return props.render({
    scroll: scrollY
  })
} )