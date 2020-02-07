import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default memo( (props) => {

  const [ scrollY, setScrollY ] = useState( 0 )
  const isMenuActive = useSelector( state => state.globalMenu )

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      const scrlY = window.scrollY
      setScrollY( scrlY )
    } )
  }, [] )

  return props.render({
    scroll: scrollY,
    isMenuActive
  })
} )