import styled from "styled-components"

export const Container = styled.div`
  width: ${ ({ width }) => width ? width : 0 };
  height: ${ ({ height }) => height ? height : 0 };
`