import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import AUTH from '../../../API/authorisation'
import GET from '../../../API/get'
import POST from '../../../API/post'
import { setPopupWindowActive, logoutUser } from '../../../Redux/actions'

const CompanyManagementLogic = ({ render }) => {

  const [ companies, setCompanies ] = useState([]);
  const [ employers, setEmployers ] = useState([]);
  const [ employeesWindow, setEmployeesWindow ] = useState({
    isActive: false,
    owners: [],
    employees: [],
    company: ''
  });
  const [ isLoading, setLoading ] = useState({
    deleteCompany: false
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

  const handleEmployeeListButton = ( owners, employees, company ) => {
    
    if( employeesWindow.isActive ){
      const window = {
        ...employeesWindow,
        isActive: false,
        owners: [],
        employees: [],
        company: ''
      }
      setEmployeesWindow( window );
    }
    else{
      const window = {
        ...employeesWindow,
        isActive: true,
        owners,
        employees,
        company
      }
      setEmployeesWindow( window );
    }
  }

  const handleAddOwnerButton = async ( nick, company ) => {
    
    const data = await POST( 'add-shareholder', {
      username: nick,
      company
    } );

    if( data.status === 'ok' ){
      const index = employeesWindow.employees.indexOf( nick );
      const newEmployees = [ ...employeesWindow.employees ];
      newEmployees.splice( index, 1 );

      const window = {
        ...employeesWindow,
        owners: [ ...employeesWindow.owners, nick ],
        employees: newEmployees
      }

      setEmployeesWindow( window );
    }
    
  }

  const handleRemoveOwnerButton = async ( nick, company ) => {
    const data = await POST( 'remove-shareholder', {
      username: nick,
      company
    } );

    if( data.status === 'removed' ){
      const index = employeesWindow.owners.indexOf( nick );
      const newOwners = [ ...employeesWindow.owners ];
      newOwners.splice( index, 1 );

      const window = {
        ...employeesWindow,
        owners: newOwners,
        employees: [ ...employeesWindow.employees, nick ]
      }

      setEmployeesWindow( window );
    }
  }
  
  const handleRemoveEmployeeButton = async ( nick, company ) => {
    const data = await POST( 'remove-user-from-company', {
      username: nick,
      company
    } );

    if( data.status === 'deleted' ){
      const index = employeesWindow.employees.indexOf( nick );
      const newEmployees = [ ...employeesWindow.employees ];
      newEmployees.splice( index, 1 );

      const window = {
        ...employeesWindow,
        employees: newEmployees
      }

      setEmployeesWindow( window );
    }
  }

  const handleDeleteCompanyButton = async ( id, logo ) => {
    setLoading({ ...isLoading, deleteCompany: true });
    const deleteData = await POST( 'delete-company', { id, logo } );
    if( deleteData.status === 'deleted' ){
      setLoading({ ...isLoading, deleteCompany: false });
      getUserCompanies();
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
      employeesWindow,
      isLoading
    },
    handlers: {
      handleEmployeeListButton,
      handleAddOwnerButton,
      handleRemoveOwnerButton,
      handleRemoveEmployeeButton,
      handleDeleteCompanyButton
    }
  })
}

CompanyManagementLogic.propTypes = {
  render: PropTypes.func.isRequired
}

export default CompanyManagementLogic;