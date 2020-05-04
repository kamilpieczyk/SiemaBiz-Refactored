import styled from "styled-components"

import colors from '../../../styles/colors'


export const Container = styled.div`
    z-index: 2000;
    position: fixed;
    left: 0;
    top: 0;
    background: ${ colors.transparentBlack };
    width: 100%;
    height: 100%;
    backdrop-filter: blur( 10px );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TopBar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: ${ ( { width } ) => width };
    padding: 10px;
    background: ${ colors.main };
    border-radius: 5px 5px 0 0;
    i{
        cursor: pointer;
        color: ${ colors.white };
    }

    @media ( max-width: 800px ) {
        width: 95%;
    }
`

export const ContentWindow = styled.div`
    width: ${ ( { width } ) => width };
    ${ ( { height } ) => height ? `height: ${ height }` : null };
    ${ ( { height } ) => height ? `max-height: ${ height }` : "80vh" };
    background: ${ colors.white };
    border-radius: 0 0 5px 5px;
    padding: 20px;
    overflow: auto;
    position: relative;

    ::-webkit-scrollbar{
        width: 5px;
        background-color: ${ colors.transparentBlack };
        backdrop-filter: blur(5px);
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${ colors.main };
        border-radius: 2px;
    }

    @media ( max-width: 800px ) {
        width: 95%;
        height: 90%;
    }
`