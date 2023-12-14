const formValidate = ({ email, password }) => {
  let disabled = !email.includes("@") || password.length < 8;
  let errors = { email: !email.includes("@") && "이메일 양식을 확인해주세요", password: password.length < 8 && "비밀번호는 8자리 이상입니다" };

  return { disabled, errors };
};

export default formValidate;
