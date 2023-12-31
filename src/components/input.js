import styled from "styled-components";

const HSInput = ({ label, error, ...inputProps }) => {
  return (
    <InputBox>
      <Label>{label}</Label>
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
    box-sizing: border-box;
    padding: 10px 10px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.gray[100]};
    margin-top: 5px;
    &:focus {
      outline: none;
    }
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
`;

const ValidateMessage = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.COLORS.error};
  font-size: ${({ theme }) => theme.FONT_SIZE.extraSmall};
`;
