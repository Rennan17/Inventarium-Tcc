import styled from "styled-components";
import "./style.css";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;

  &::after{
    display: block;
    widht: 0px; 
    height: 24px;
    overflox: hidden;
    transition: width 200ms, margin-left 200ms;
  }

  &:is(:hover,:focus)::after{
    width: 24px;
    margin-left: 8px;
  }

`;
