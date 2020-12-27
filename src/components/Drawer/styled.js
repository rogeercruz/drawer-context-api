import styled, { css } from 'styled-components';

const DrawerBody = styled.div`
    position: absolute;
    opacity: 1;
    overflow: hidden;
    width: 100%;
    height: 300px;
    transition: all .5s;
    padding: 10px;
    bottom: -100%;
    box-shadow: 10px 4px 10px #d3d3d3;
    left: 0;
    background-color: tomato;

    ${(props) => props.show && css`
        bottom: 0;
    `}
`;

export default DrawerBody;
