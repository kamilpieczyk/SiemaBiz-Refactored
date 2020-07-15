import React from "react"
import styled from "styled-components"
import { colors } from "../../styledVars"
import { Redirect } from "react-router-dom"
import User from "./components/user/user"
import EditWindow from "./components/editWindow/editWindow"
import SearchBox from "./components/searchbox/searchbox"

const Container = styled.div`
  /* styles for container */
  width: 100%;
`

const UsersContainer = styled.div`
  /* CONTAINER WITH USERS */
`

export default ( { state, device, GetPrivileges, ...props } ) => {

  let users = [ ...state.users ]
  if( state.searchPhase.length > 0 ){
    users= users.map( user => {
      const flag = user.username.includes( state.searchPhase )
      if( flag ) return user
      else return null
    } )
  }

  return(
    <Container>
      {
        state.redirect && <Redirect to="/" />
      }
      <UsersContainer>

        {/* TABLE TITLES */}
        <User
          top
          userID="id"
          username={
            props.language === "pl"
            ? "nazwa użytkownika"
            : "username"
          }
          privilege={
            props.language === "pl"
            ? "typ konta"
            : "account type"
          }
        />
        {/* SEARCHBOX */}
        <SearchBox 
          phase={state.searchPhase} 
          action={ props.setSearchPhase } 
        />

        {/* DISPLAY USER LIST */}
        {
          users.map( ( user, i ) => {
            if( user ) return(
              <React.Fragment key={user._id}>
                {/* ONE USER ON THE LIST */}
                <User 
                  userID={user.userID}
                  username={user.username}
                  privilege={user.privilege}
                  GetPrivileges={GetPrivileges}
                  actions={{
                    delete: () => props.deleteUser( user.userID ),
                    edit: () => props.editUser( user.username )
                  }}
                />

                {/* EDIT WINDOW */}
                {
                  state.isEdit === user.username && (
                    <EditWindow 
                      usr={ user }
                      controlFunc={ () => props.editUser( user.username ) }
                      getUserList = { props.getUserList }
                    />
                  )
              }
              
            </React.Fragment>
          )
          else return null
           } )
        }
      </UsersContainer>
    </Container>
  )
}