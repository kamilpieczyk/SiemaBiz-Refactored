import React from "react"
import MaterialIcon from "material-icons-react"
import styled from "styled-components"
import { colors } from "../../../../../styledVars"
import { connect } from "react-redux"
import { mapStateToProps , mapDispatchToProps } from "../../../../../mapToProps"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${
    ( { active } ) => active ? "pointer" : "not-allowed"
  };
  p{
    margin-left: 10px;
    color: ${ ( { active } ) => active ? colors.main : colors.grey };
  }
`

export default connect( mapStateToProps, mapDispatchToProps )(
  ( { active, icon, name, action, ...props } ) => {
    // const language = props.language.actual
    const device = props.device.width

    return (
      <Container active={active} onClick={action}>
        <MaterialIcon 
          icon={icon}
          color={ active ? colors.main : colors.grey }
          size="tiny"
        />
        {
          device === "desktop" && <p>{name}</p>
        }
      </Container>
    )
  }
)