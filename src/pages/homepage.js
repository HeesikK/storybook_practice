import styled from "styled-components";
import HSButton from "../components/button";
import HSInput from "../components/input";
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
        <HSInput label={"이메일"} type="text" name="email" onChange={onChangeInput} placeholder="이메일을 입력해주세요" isValid={!email.includes("@")} error={"이메일 양식을 확인해주세요"} />
        <HSInput
          label={"비밀번호"}
          type="password"
          name="password"
          onChange={onChangeInput}
          placeholder="비밀번호를 입력해주세요"
          isValid={password.length < 8}
          error={"비밀번호는 8자리 이상입니다"}
        />
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
