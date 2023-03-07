import React, { useEffect, useState } from "react";

function LoginForm() {
  const [inputNickname, setInputNickname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConfirmPw, setInputConfirmPw] = useState("");

  const handleInputNickname = (e) => {
    setInputNickname(e.target.value);
  };

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputConfirmPw = (e) => {
    setInputConfirmPw(e.target.value);
  };

  // Login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      //axios.get('/user_inform/login')
      //    .then(res => console.log(res))
      //    .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );
  return (
    <div>
      <div className="p-10 pb-2 bg-white">
        <div>
          <div className="rounded-lg text-left pb-1 w-full"> 이름</div>
          <input
            placeholder="이름을 입력하세요"
            id="id"
            value={inputNickname}
            onChange={handleInputNickname}
            className="rounded-lg border-4 w-full px-4 py-1"
          />
        </div>
        <div>
          <div className="rounded-lg text-left pb-1 pt-4 w-full"> 이메일</div>
          <input
            placeholder="이메일를 입력하세요"
            id="id"
            value={inputEmail}
            onChange={handleInputEmail}
            className="rounded-lg border-4 w-full px-4 py-1"
          />
        </div>
        <div className="pb-10">
          <div className="rounded-lg text-left pb-1 pt-4 w-full">비밀번호</div>
          <input
            placeholder="영문자,숫자,특수문자 포함 최소8자"
            id="password"
            value={inputPw}
            onChange={handleInputPw}
            className="rounded-lg border-4 w-full px-4 py-1"
          />
          <div className="pt-2">
            <input
              placeholder="비밀번호를 확인해 주세요"
              id="password"
              value={inputConfirmPw}
              onChange={handleInputConfirmPw}
              className="rounded-lg border-4 w-full px-4 py-1"
            />
          </div>
        </div>
        <button
          type="button"
          className="rounded-lg border-0  bg-blue-500 hover:bg-blue-700 text-white w-full px-4 py-2"
          onClick={onClickLogin}
        >
          회원가입
        </button>
        <div className=" text-center">
          <div class="flex items-center justify-center space-x-2 my-6">
            <span class="h-px w-16 bg-gray-200"></span>
            <span class="text-gray-400 font-normal">간편 회원가입</span>
            <span class="h-px w-16 bg-gray-200"></span>
          </div>
          <div className="space-x-6">
            {/* 각 사이트 Oauth 클라이언트 필요 */}
            <button>
              <img
                src="/images/google-icon-48x48.png"
                alt=""
                className="rounded-lg"
              />
              <div>Google</div>
            </button>
            <button>
              <img
                src="/images/kakao-icon-48x48.png"
                alt=""
                className="rounded-lg"
              />
              <div>KaKao</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;