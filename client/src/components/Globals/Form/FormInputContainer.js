import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  /* top: -14px;
  font-size: 12px;
  color: ${mainColor}; */
  top: -7px;
  font-size: 12px;
  color: ${mainColor};
  background: white;
  padding: 1px 5px;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border: 1px solid ${subColor};
  /* border-bottom: 1px solid ${subColor}; */
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

// FormInputContainer.displayName = "FormInputContainer";

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;

export const FormContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

// FormInputLabel.displayName = "FormInputLabel";
