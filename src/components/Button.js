import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavButton = styled.div`
    display: flex;
    align-items: center;
    margin: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? "red" : "CD853f")};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 10px;
    max-width: 200px;
    height:${({ short }) => (short ? "20px" : "40px")};
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:${({ round }) => (round ? "50px" : "0px")};
    padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
    color: ${({ primary }) => (primary ? "#fff" : "000d1a")};
    font-size: ${({ big }) => (big ? "20px" : "14px")};
    margin-left:10px;

    &:hover {
        transform: translateY(-2px);
    }
`;
