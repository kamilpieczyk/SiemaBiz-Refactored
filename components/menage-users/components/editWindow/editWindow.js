import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { colors } from "../../../../styledVars"
// import MaterialIcon from "material-icons-react"
import Window from "../../../UserPanelMenageCompany__AddWindow"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../../../mapToProps"
import GetPrivileges from "../../../getPrivileges"
import ChooseField from "../../../dark_choose_field/index"
import withChooseFieldHandle from "./hoc/withFieldHandle"
import Submit from "../../../submit"
import url from "../../../fetchUrl"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    display: grid;
    grid-template-columns: 50% 50%;
  }
`

const Label = styled.label`
  display: block;
`

const Field = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.main};
  text-align: center;
  width: 150px;
  padding: 5px;
  outline: none;
  transition: .2s;

  :focus{
    border-bottom: 2px solid ${colors.main};
  }
`

export default connect( mapStateToProps, mapDispatchToProps )( 
  
  ( { usr, controlFunc, ...props } ) => {
    const [ choosenOption, setChoosenOption ] = useState( null )
    const [ isLoading, setIsLoading ] = useState( false )

    const userRef = useRef( null )
    const emailRef = useRef( null )
    const nameRef = useRef( null )
    const surnameRef = useRef( null )
    const phoneRef = useRef( null )

    const device = props.device.width
    const language = props.language.actual
    const ChooseFieldWithHandle = withChooseFieldHandle( ChooseField )

    const handleSubmit = async () => {
      setIsLoading( true )

      const body = JSON.stringify( {
        id: usr._id,
        username: userRef.current.value,
        email: emailRef.current.value,
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        phone: phoneRef.current.value,
        privilege: choosenOption
      } )

      const data = await fetch( `${url}edit-user`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body
      } )
      const res = await data.json()

      if( res.status === "ok" ){
        controlFunc( usr.username )
        props.getUserList()
      }
      else{
        setIsLoading( false )
      }
    }
    
    useEffect( () => {
      GetPrivileges( usr.privilege )
        .then( newPriv => {
          setChoosenOption( newPriv )
        } )
    }, [] )
    // console.log( usr )

    const fields = [
      {
        label:{
          pl: "nazwa użytkownika",
          en: "username",
        },
        ref: userRef,
        defaultValue: usr.username
      },
      {
        label:{
          pl: "adres email",
          en: "email adress",
        },
        ref: emailRef,
        defaultValue: usr.email
      },
      {
        label:{
          pl: "imię",
          en: "name",
        },
        ref: nameRef,
        defaultValue: usr.name
      },
      {
        label:{
          pl: "nazwisko",
          en: "surname",
        },
        ref: surnameRef,
        defaultValue: usr.surname
      },
      {
        label:{
          pl: "numer telefonu",
          en: "phone number",
        },
        ref: phoneRef,
        defaultValue: usr.phone
      }
    ]

    return (
      <Window
        width={device === "desktop" ? "80%" : "95%"}
        heigth={device === "desktop" ? "80%" : "95%"}
        close={controlFunc}
      >
        <Container>
          <ChooseFieldWithHandle 
            choosenOption = { choosenOption }
            callback = {setChoosenOption}
          />
          {
            fields.map( ( field, i ) => (
              <div key={i}>
                <Label>
                  {
                    language === "pl"
                      ? field.label.pl
                      : field.label.en
                  }:
                </Label>
                <Field
                  ref={field.ref}
                  defaultValue={field.defaultValue}
                />
              </div>
            ) )
          }
        </Container>

        <Submit 
          text = {
            language === "pl"
              ? "aktualizuj profil"
              : "submit changes"
          }
          action = { handleSubmit }
          loading = { isLoading }
        />

      </Window>
    )
  } 
)