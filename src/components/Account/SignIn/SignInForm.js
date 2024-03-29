import axios from "axios";
import React, { useEffect, useState } from "react";

function LoginForm() {
  // 테스트 아이디
  const User = {
    email: "test@example.com",
    pw: "test2323@@@",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState
  const handleEmail = (e) => {
    setEmail(e.target.value);
    // 임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // 임시 유효성 검사 - 추후 정한 로직 있다면 알려주세요
    const pwRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (pwRegex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  // Login 버튼 클릭 이벤트
  const onClickSigIn = () => {
    if (email === User.email && password === User.pw) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      axios
        .get("/user_inform/login")
        .then((res) => console.log(res))
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  return (
    <div>
      <div className="p-10 pb-2 bg-white">
        {/* 이메일 입력 */}
        <div>
          <div className="w-full pb-1 text-left rounded-lg"> 이메일</div>
          <input
            placeholder="이메일를 입력하세요"
            id="id"
            value={email}
            onChange={handleEmail}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
          <div className="text-xs text-red-500 ">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>
        </div>
        {/* 비밀번호 입력 */}
        <div className="pb-10">
          <div className="w-full pt-4 pb-1 text-left rounded-lg">비밀번호</div>
          <input
            placeholder="비밀번호를 입력하세요"
            id="password"
            value={password}
            onChange={handlePassword}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
          <div className="text-xs text-red-500 ">
            {!pwValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>
        {/* 로그인 버튼 */}
        <button
          type="button"
          className="w-full px-4 py-2 text-white bg-blue-500 border-0 rounded-lg hover:bg-blue-700"
          value={notAllow}
          onClick={onClickSigIn}
          disabled={notAllow}
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
