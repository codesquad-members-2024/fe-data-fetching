# fe-data-fetching

## `#promise` `#데이터통신` `#비동기` `#Express` `#TS`

### 🔧 설치 & 셋팅

-   [Express 설정하기](https://expressjs.com/en/starter/installing.html)

-   [TypeScript 설정하기](https://velog.io/@nemo/typescript-install-setting)

-   추가 설치

    `npm install copyfiles --save-dev`

    `npm install rimraf --save-dev`

    `npm i --save-dev @types/cookie-parser`  
     import cookieParser from "cookie-parser";

    `npm i --save-dev @types/morgan`  
     import logger from "morgan";

### ✨ 구현

-   [x] 파일 구조 변경
        <i>dist는 distributable(배포 가능한)의 약자로,
        재사용되는 소스 코드를 컴파일하거나 축소할 필요 없이 다른 사람이 직접 사용할 수 있는 파일이 저장되는 디렉터리를 의미합니다.</i>

-   <b>백엔드 구성</b>
-   [ ] Express 를 활용해서 서버를 구성한다.
-   [ ] 뉴스 리스트 응답을 할때는 DB 또는 json파일을 import받아서 응답한다.
-   [ ] static 파일(js, image, html, css 등) 도 express를 통해서 처리한다.
-   [ ] 서버는 뉴스정보를 응답할 때 의도적으로 2~5초 지연응답한다.

-   <b>데이터</b>
-   [ ] 임의의 뉴스데이터를 json형태의 파일로 저장한다. (DB 사용 상관없음)

-   <b>초기 페이지</b>
-   [ ] 기본 화면 레이아웃 구현
        (좌측에 뉴스제목리스트와 버튼, 우측에 첫번째 뉴스콘텐츠가 보여진다.)
-   [ ] 뉴스제목리스트는 서버에 비동기 요청을 통해 받는다.
-   [ ] 뉴스제목리스트의 첫번째 뉴스가 자동선택되어 보여진다.
-   [ ] 자동으로 선택된 뉴스콘텐츠는 추가적인 API요청을 통해서 받는다
-   [ ] 자동으로 선택된 뉴스콘텐츠는 추가적인 API요청을 통해서 받는다

-   <b>뉴스 선택</b>
-   [ ] 좌측 뉴스 제목을 선택하면 우측에 해당 뉴스콘텐츠를 보여준다.
-   [ ] 선택한 뉴스 콘텐츠는 그때마다 서버에 요청해서 받는다.
-   [ ] 뉴스콘텐츠가 노출되기 전에는 우측 뉴스콘텐츠 영역에 loading indicator를 표시해준다. (또는 텍스트로 loading.. 으로 표시)
-   [ ] 콘텐츠가 로딩중에 다른 뉴스 제목을 선택하면, 요청했던 정보는 취소되고 새로운 요청을 보낸다.

-   <b>자동 업데이트</b>
-   [ ] 전체 뉴스 정보는 1분마다 자동으로 갱신된다.
-   [ ] 다음 갱신 시간까지 타이머가 동작되어 초단위로 화면에 노출된다.

-   <b>업데이트</b>
-   [ ] 좌측상단에 '업데이트' 버튼을 선택하면 전체 뉴스리스트가 갱신된다.
-   [ ] 첫번째 뉴스가 자동선택되어 우측 본문화면에 뉴스 콘텐츠가 노출된다.
-   [ ] 뉴스 타이머는 초기화 되어 다시 계산을 시작한다.
-   [ ] 업데이트 중에는 업데이트 버튼이 비활성화 돼야 한다.
-   [ ] 갱신된지 30초 이내 뉴스를 수동으로 업데이트 할 경우, 캐시된 뉴스 정보를 화면에 즉시 노출하고,  
         동시에 새로운 뉴스 정보를 가져와서 현재 콘텐츠와 비교후에 , 필요하면 추가로 업데이트 한다.

### ❓

[📓에러 상황](https://github.com/minjeongHEO/fe-data-fetching/wiki/%5BData-Fetching%5D-%EC%97%90%EB%9F%AC-%EC%83%81%ED%99%A9)
