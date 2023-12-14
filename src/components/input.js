import styled from "styled-components";

const HSInput = ({ label, error, ...inputProps }) => {
  return (
    <InputBox>
      <label>{label}</label>
      <input {...inputProps} />
      {error && <ValidateMessage>{error}</ValidateMessage>}
    </InputBox>
  );
};

export default HSInput;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  & > input {
    width: 200px;
    padding: 10px 5px;
    border-radius: 8px;
    border: none;
    background-color: #e8e8e8;
    margin-top: 5px;
  }
`;

const ValidateMessage = styled.p`
  margin: 0px;
  color: red;
  font-size: 12px;
`;
