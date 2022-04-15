import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto 20px;
  max-width: 980px;

  border: 1.75px solid #4f4f4f;
  border-radius: 10px;

  background-color: var(--grey);

  input {
    border: 0px;
    background: none;
    outline: none;

    font-family: "Poppins", sans-serif;
    font-size: 16px;

    padding: 15px;
  }

  button {
    border: 0px;
    background: none;
    outline: none;
    opacity: 0.6;
    transition: 0.2s;

    height: 50px;
    width: 50px;

    margin-right: 20px;
  }

  button:hover {
    opacity: 1;
  }
`;
