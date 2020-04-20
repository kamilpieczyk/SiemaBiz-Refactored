import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import AUTH from '../../../API/authorisation'
import GET from '../../../API/get'
import { setPopupWindowActive, logoutUser } from '../../../Redux/actions'

const CompanyManagementLogic = ({ render }) => {

  const [ companies, setCompanies ] = useState([]);
  const [ employers, setEmployers ] = useState([]);
  const [ employeesWindow, setEmployeesWindow ] = useState({
    isActive: false,
    owners: [],
    employees: []
  })

  const dispatch = useDispatch();
  const language = useSelector( s => s.language.source );

  const getUserCompanies = async() => {
    const authorisation = await AUTH();

    if( authorisation.status === 'authorised' ){
      const userCompanies = await GET( `get-user-companies/${ authorisation.username }` );
      setCompanies( userCompanies.companies );
    }
    else{
      dispatch( setPopupWindowActive({
        title: language.general.popups.wrong.title,
        messenge: language.general.popups.wrong.messenge
      }) );
      dispatch( logoutUser() );
    }
  }

  const getUserEmployers = async() => {
    const authorisation = await AUTH();

    if( authorisation.status === 'authorised' ){
      const userCompanies = await GET( `get-user-employers/${ authorisation.username }` );
      setEmployers( userCompanies.companies );
    }
    else{
      dispatch( setPopupWindowActive({
        title: language.general.popups.wrong.title,
        messenge: language.general.popups.wrong.messenge
      }) );
      dispatch( logoutUser() );
    }
  }

  const handleEmployeeListButton = ( owners, employees ) => {
    if( employeesWindow.isActive ){
      const window = {
        ...employeesWindow,
        isActive: false,
        owners: [],
        employees: []
      }
      setEmployeesWindow( window );
    }
    else{
      const window = {
        ...employeesWindow,
        isActive: true,
        owners,
        employees
      }
      setEmployeesWindow( window );
    }
  }

  useEffect(
    () => {
      getUserCompanies();
      getUserEmployers();
    },
    []
  );

  return render({
    state: {
      companies,
      employers,
      employeesWindow
    },
    handlers: {
      handleEmployeeListButton
    }
  })
}

CompanyManagementLogic.propTypes = {

}

export default CompanyManagementLogic;