import styled from "styled-components";

// custom checkbox https://velog.io/@gustjq4146/input-checkbox-%EC%BB%A4%EC%8A%A4%ED%85%80
// checkbox event https://velog.io/@soyeon9819/React-custom-checkbox-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81%EA%B3%BC-%EC%BA%A1%EC%B3%90%EB%A7%81

const HSCheckBox = ({ label, id, ...checkBoxProps }) => {
  return (
    <CheckBox>
      <input {...checkBoxProps} id={id} />
      <label htmlFor={id}>{label}</label>
    </CheckBox>
  );
};

export default HSCheckBox;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  & input {
    display: none;
  }

  & label {
    font-size: ${({ theme }) => theme.FONT_SIZE.extraSmall};
  }

  & label::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-image: url("https://static.thenounproject.com/png/1519073-200.png");
    background-size: 12px;
    float: left;
    margin-right: 5px;
  }

  & input:checked + label::before {
    background-image: url("https://cdn-icons-png.flaticon.com/256/1287/1287087.png");
  }
`;
