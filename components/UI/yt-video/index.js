import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Container } from './yt-video__styles'

const YtVideo = ({ title, id }) => {
  const device = useSelector( s => s.deviceScreen );
  const url = `https://www.youtube.com/embed/${ id }?origin=localhost:3000`;

  return(
    <Container>
      { title && <h2>{ title }</h2> }
      <iframe 
        width = "100%"
        height = { device === 'mobile' ? "250" : "415" }
        src = { url }
        frameborder = "0"
        allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </Container>
  )
}

YtVideo.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default YtVideo;