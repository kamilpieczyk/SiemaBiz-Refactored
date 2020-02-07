import { useState } from 'react'

export default ({ render }) => {

  const [ isClicked, setClicked ] = useState( false )

  return render({
    isClicked,
    handleClick: () => setClicked( !isClicked )
  })
}