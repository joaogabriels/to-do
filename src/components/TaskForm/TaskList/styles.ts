import styled from "styled-components";

interface ContainerProps {
  checked: boolean;
}

export const Section = styled.div(
  ({ checked }: ContainerProps) =>
    `
    margin: auto;
    max-width: 980px;
    padding: 10px 15px;
    background-color: var(--blue-light);
    transition: 2s;

    section {
        display: flex;
        justify-content: space-between;
        background-color: var(--grey);
        padding: 10px;
        margin: 2px;
        border: 1px solid #4f4f4f;
        border-radius: 15px;
    }
    
    input{
        height: 20px;
        width: 20px;
    }
    
    label {
        margin-left: 10px;
        text-decoration: ${checked ? "line-through" : "initial"};
        transition: 0.2s;
    }
    
    button{
        border: 0px;
        background: none;
        outline: none;
        height: 25px;
        width: 25px;
        padding-right: 15px;
        opacity: 0.5;
        transition: 0.1s;
    }
    
    button:hover {opacity: 1}
    
    .task-list{
        display: flex;
        align-items: center;
    }
    
`
);
