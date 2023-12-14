import styled from "styled-components";
import HSButton from "../components/button";
import { useState } from "react";

const HomePage = () => {
  const [{ email, password }, setInput] = useState({
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
  };

  const onChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmitForm}>
        <InputBox>
          <label>이메일</label>
          <input type="text" placeholder="이메일을 입력하세요" name="email" onChange={onChangeInput} />
          {!email.includes("@") && <ValidateMessage>이메일 양식을 확인해주세요</ValidateMessage>}
        </InputBox>
        <InputBox>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력하세요" name="password" onChange={onChangeInput} />
          {password.length < 8 && <ValidateMessage>비밀번호는 8자리 이상입니다</ValidateMessage>}
        </InputBox>
        <HSButton variant={"primary"} size={"large"} shape={"shape"}>
          로그인
        </HSButton>
      </form>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

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
