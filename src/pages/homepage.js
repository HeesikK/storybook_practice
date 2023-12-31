import styled from "styled-components";
import HSButton from "../components/button";
import HSInput from "../components/input";
import { useState } from "react";
import useInput from "../hooks/use-input";
import formValidate from "../utils/validate-helper";
import HSCheckBox from "../components/checkbox";
import HSSelect from "../components/select";

const HomePage = () => {
  const [{ email, password }, onChangeInput] = useInput({
    email: "",
    password: "",
  });

  const { disabled, errors } = formValidate({ email, password });
  console.log(disabled, errors);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (email === "test@test.com" && password === "test1234") alert("환영합니다");
    if (email !== "test@test.com" || password !== "test1234") alert("회원정보가 올바르지 않습니다");
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmitForm}>
        <HSInput label={"이메일"} type="text" name="email" onChange={onChangeInput} placeholder="이메일을 입력해주세요" error={errors.email} />
        <HSInput label={"비밀번호"} type="password" name="password" onChange={onChangeInput} placeholder="비밀번호를 입력해주세요" error={errors.password} />
        <CheckBoxArea>
          <HSCheckBox type="checkbox" label={"로그인 상태 유지"} id={"Checked"} onClick={() => console.log("체크")} />
        </CheckBoxArea>
        <HSButton variant={"primary"} size={"large"} shape={"shape"} disabled={disabled}>
          로그인
        </HSButton>
      </form>
      <div>
        <HSSelect />
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CheckBoxArea = styled.div`
  margin: 10px 0 10px 0;
`;
