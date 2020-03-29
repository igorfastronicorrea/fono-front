import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSideNav = styled.div`   
    position: fixed;   /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    width: 95px;
    height: 100%;
    position: absolute !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;      /* Stay on top of everything */
    top: 3.7em;      /* Stay at the top */
    background-color: #221C2D; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    overflowY: scroll;

`;

export const StyledNavItem = styled.div`
    height: 100px;
    width: 95px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 16px;   /* Puts space between NavItems */
    padding: 16px;
    h1 {
        font-family: 'Roboto';
        font-weight: 400;
        color: ${(props) => props.active ? "white" : "#867390"};
        font-size: 16px;
        margin-top: 6px;
        text-align: center;
      }
      a {
        font-size: 2.0em;
        color: ${(props) => props.active ? "white" : "#867390"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }
    }
    background: ${(props) => props.active ? "#1C1623" : "#221C2D"};
`;

export const NavIcon = styled.div`

`;