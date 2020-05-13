import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import { Container, Title, CompanyName, City, Description, ButtonContainer } from './job-offer__styles'
import GET from '../../../../API/get'
import SmallButton from '../../../UI/small-button'
import withClick from '../../../HOC/withClick'
import Separator from '../../../UI/separator'

const Button = withClick( SmallButton );

const JobOffer = ({ title, companyID, city, wages, description }) => {
  const [ companyName, setCompanyName ] = useState('');
  const [ isHover, setHover ] = useState( false );

  const language = useSelector( s => s.language.source.jobOffersSite );

  const getCompany = async () => {
    const data = await GET( `get-company/${ companyID }` );
    setCompanyName( data.company.name );
  }

  useEffect( () => { getCompany() }, [] );

  return(
    <Container onMouseEnter = { () => setHover( true ) } onMouseLeave = { () => setHover( false ) }>
      <Title>{ title }</Title>
      <CompanyName>{ companyName }</CompanyName>
      <City>{ city }</City>
      <Description>{ description.slice( 0, 200 ) }...</Description>
      <ButtonContainer isHover = { isHover }>
        <Button thin onClickFunction = { () => {} } >
          <MaterialIcon icon = 'visibility' />
          <Separator width = '5px' />
          { language.seeOfferButton }
        </Button>
      </ButtonContainer>
    </Container>
  )
}

JobOffer.propTypes = {
  title: PropTypes.string.isRequired,
  companyID: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  wages: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default JobOffer;