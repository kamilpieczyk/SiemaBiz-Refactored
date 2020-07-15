import React, { useState } from "react"
import styled from "styled-components"
import { colors } from "../../../../styledVars"
import Action from "./components/action"
import { connect } from "react-redux"
import { mapStateToProps , mapDispatchToProps } from "../../../../mapToProps"
import Loading from "../../../loadingCircle"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${ ( { top } ) => top ? colors.main : colors.white };
  width: 100%;
  padding: 15px 0;
  margin: 10px 0;
  border-radius: 5px;
  color: ${ ( { top } ) => top ? colors.white : colors.black };

  @supports(backdrop-filter: blur()){
    backdrop-filter: blur(5px);
    background: ${ ( { top } ) => top ? colors.transparentMain : colors.transparentWhite };
  }

  div{
    flex: 1;
    text-align: center;
  }
`
const ActionsContainer = styled.div`
  display: flex;
`

const ChoiceButton = styled.button`
  border: none;
  border-radius: 5px;
  background: ${ ( { bool } ) => bool ? "green" : colors.main };
  padding: 10px;
  margin: 10px;
  color: ${colors.white};
`

export default connect( mapStateToProps, mapDispatchToProps )(
  ( { userID, username, privilege, GetPrivileges, top, actions, language } ) => {
    const [ isDelete, setIsDelete ] = useState( false )
    const [ isLoading, setIsLoading ] = useState( false )
    if( isDelete ) return(
      <Container>
        <div>
          {
            language.actual === "pl"
              ? `Na pewno chcesz usunąć ${username} z listy użytkowników?`
              : `Are you sure you want to delete ${username}?`
          }
        </div>
        <div>
          <ChoiceButton bool onClick={ () => {
            setIsLoading( true )
            actions.delete( () => setIsLoading( false ) )
          } }>
            {
              isLoading
                ? <Loading />
                : language.actual === "pl"
                  ? "tak"
                  : "yes"
            }
          </ChoiceButton>
          <ChoiceButton onClick={ () => setIsDelete( false ) }>
            {
              language.actual === "pl"
                ? "nie"
                : "no"
            }
          </ChoiceButton>
        </div>
      </Container>
    )
    else return(
      <Container top={top}>
        <div>{userID}</div>
        <div>{username}</div>
        <div>
          {
            GetPrivileges 
              ? <GetPrivileges privileges={privilege} />
              : privilege
          }
        </div>
        <div>
          {
            top
              ? "actions"
              : (
                <ActionsContainer>
                  <Action
                    active={
                      privilege > 225805
                        ? false
                        : true
                    }
                    icon="create"
                    name={ language.actual === "pl" ? "edytuj" : "edit" }
                    action={ actions.edit }
                  />

                  <Action
                    active={
                      privilege > 225805
                        ? false
                        : true
                    }
                    icon="delete"
                    name={ language.actual === "pl" ? "usuń" : "delete" }
                    action={ () => setIsDelete( true ) }
                  />
                </ActionsContainer>
              )
          }
        </div>
      </Container>
    )
  }
)