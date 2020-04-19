import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import { Container } from './company-box__styles'
import ApiKey from '../../../API/key'
import Button from '../small-button'
import withClick from '../../HOC/withClick'

const ClickableButton = withClick( Button );

const CompanyBox = ({ company }) => {

  const language = useSelector( s => s.language.source );
  const router = useRouter();

  const handleButton = ( id ) => {
    router.push({
      pathname: '/company',
      query: { id }
    });
    window.scrollTo( 0, 0 );
  }

  return(
    <Container>
      <div className = 'image-container'>
        <img src = { `${ ApiKey }uploads/logos/${ company.logo }` } />
      </div>
              
      <div>
        <h3>{ company.name }</h3>
        <span>{ company.industry }</span>
        <p>{ company.description.slice( 0, 400 ) } ...</p>
        <div className = 'button-container'>
          <ClickableButton onClickFunction = { () => handleButton( company._id ) }>
            { language.cathalogueSite.button }
          </ClickableButton>
        </div>
      </div>
    </Container>
  )
}

CompanyBox.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired
}

export default CompanyBox;