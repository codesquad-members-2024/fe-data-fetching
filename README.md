# fe-data-fetching

## `#promise` `#데이터통신` `#비동기`

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

-   [ ] 파일 구조 변경
        dist는 distributable(배포 가능한)의 약자로,
        재사용되는 소스 코드를 컴파일하거나 축소할 필요 없이 다른 사람이 직접 사용할 수 있는 파일이 저장되는 디렉터리를 의미합니다.

뉴스제목리스트는 서버에 비동기 요청을 통해 받는다.  
자동으로 선택된 뉴스콘텐츠(첫번째 뉴스)는 추가적인 API요청을 통해서 받는다.

### ❓

-   캐시

1. 캐시된 데이터를 일정 시간 후에 갱신하거나, 사용자가 요청할 때 최신 데이터로 업데이트하는 메커니즘을 구현해야 합니다.
2. 캐시는 일반적으로 제한된 메모리나 스토리지 공간을 사용하기 때문에,  
   가장 자주 접근하거나 중요한 데이터만 선택적으로 캐시하는 것이 좋습니다. 또한, 캐시 정책(예: LRU(Least Recently Used) 캐시)을 사용하여 효율적으로 캐시 공간을 관리할 수 있습니다.
