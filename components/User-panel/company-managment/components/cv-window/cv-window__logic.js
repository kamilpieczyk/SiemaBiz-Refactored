import { useEffect, useState } from 'react'
import {} from 'react-redux'
import PropTypes from 'prop-types'

import POST from '../../../../../API/post'

const CvWindow = ({ render, applications }) => {

  const [ state, setState ] = useState({
    isLoading: true,
    cvs: [],
    shownCvNo: 0
  });

  const getUsersCvs = async () => {
    const getCVs = await POST( 'get-cv', { users: applications } );
    if( getCVs.status === 'ok' ){
      setState({
        ...state,
        isLoading: false,
        cvs: getCVs.applications
      })
    }
  }

  const handleCvNavButtons = ( typeOfButton ) => {
    
    if( typeOfButton === 'next' ){
      const number = state.shownCvNo + 1;
      if( number + 1 > applications.length ){
        setState({
          ...state,
          shownCvNo: 0
        });
      }
      else setState({
        ...state,
        shownCvNo: number
      });
    }

    else if( typeOfButton === 'prev' ){
      const number = state.shownCvNo - 1;
      if( number < 0 ){
        setState({
          ...state,
          shownCvNo: applications.length - 1
        });
      }
      else setState({
        ...state,
        shownCvNo: number
      });
    }
  }

  useEffect(
    () => {
      getUsersCvs();
    }, []
  )

  return render({
    state,
    handleCvNavButtons
  })
}

CvWindow.propTypes = {
  render: PropTypes.func.isRequired,
  applications: PropTypes.arrayOf( PropTypes.string ).isRequired
}

export default CvWindow;