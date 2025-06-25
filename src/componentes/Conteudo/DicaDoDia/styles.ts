import styled from "styled-components";

let tema: boolean = true;

export const StyledDicaDoDia = styled.section`
  background-color: ${tema? "#007acc22" : "black"};
  border-left: 5px solid #0f0fbb;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 4px;

  h3 {
    margin-top: 0;
    color: #0f0fbb;
  }

  p {
    color: #007acc;
    font-size: 1.1rem;
  }

  .site-oficial {
    background-color: white;
    text-align: center;
    padding: 0.4rem;
    color: #0f0fbb;

    a {
      text-decoration: none;
      font-weight: bold;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;