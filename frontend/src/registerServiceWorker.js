/* eslint-disable no-console */

import { register } from "register-service-worker";


// if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "앱을 서비스하고 있습니다.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker가 등록되었습니다.");
    },
    cached() {
      console.log("오프라인 사용을 위해 콘텐츠가 캐시되었습니다.");
    },
    updatefound() {
      console.log("새 콘텐츠를 다운로드하는 중입니다.");
    },
    updated() {
      console.log("새로운 콘텐츠가 사용 가능합니다. 새로고침 해주세요");
    },
    offline() {
      console.log("인터넷 연결을 찾을 수 없습니다. 앱이 오프라인 모드로 실행 중입니다.");
      if (window && window.Vue) {
        window.Vue.$router.push('/offline'); // Vue Router를 통해 오프라인 페이지로 이동
      }
    },
    error(error) {
      console.error("서비스 워커 등록 중 오류 발생:", error);
    },
  });


// }
