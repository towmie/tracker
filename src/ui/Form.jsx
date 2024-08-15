import styled, { css } from "styled-components";

const Form = styled.form`
  width: ${(props) => props.width || "80%"};
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `} 
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
