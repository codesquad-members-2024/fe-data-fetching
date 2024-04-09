# fe-data-fetching
## 기능 요구사항
- 초기페이지
  - [x] 좌측에 뉴스제목리스트, 우측에 첫번째 뉴스콘텐츠
  - [ ] 뉴스제목리스트는 서버에 비동기 요청
  - [x] 뉴스제목리스트의 첫번째 뉴스콘텐츠 보여주기
  - [ ] 자동으로 선택된 뉴스콘텐츠는 추가적인 API요청을 통해서 받기

- 뉴스 선택
  - [x] 좌측 뉴스 제목을 선택하면 우측에 해당 뉴스콘텐츠를 보여줌
  - [x] 선택한 뉴스 콘텐츠는 그때마다 서버에 요청해서 받기
  - [ ] 뉴스콘텐츠가 노출되기 전에는 우측 뉴스콘텐츠 영역에 loading indicator를 표시 (또는 텍스트로 loading.. )
  - [ ] 콘텐츠가 로딩중에 다른 뉴스 제목을 선택하면, 요청했던 정보는 취소되고 새로운 요청

- 자동 업데이트
  - [ ] 전체 뉴스 정보는 1분마다 자동으로 갱신
  - [ ] 다음 갱신 시간까지 타이머가 동작되어 초단위로 화면에 노출된다.

- 업데이트
  - [ ] 좌측상단에 '업데이트' 버튼을 선택하면 전체 뉴스리스트가 갱신
  - [ ] 첫번째 뉴스가 자동선택되어 우측 본문화면에 뉴스 콘텐츠가 노출
  - [ ] 뉴스 타이머는 초기화 되어 다시 계산
  - [ ] 업데이트 중에는 업데이트 버튼이 비활성화
  - [ ] 갱신된지 30초 이내 뉴스를 수동으로 업데이트 할 경우, 캐시된 뉴스 정보를 화면에 즉시 노출하고, 동시에 새로운 뉴스 정보를 가져와서 현재 콘텐츠와 비교후에 , 필요하면 추가로 업데이트

- 백엔드 구성
  - Express를 활용해서 서버를 구성
  - 뉴스 리스트 응답을 할때는 DB 또는 json파일을 import받아서 응답
  - static 파일(js, image, html, css 등) 도 express를 통해서 처리
  - 서버는 뉴스정보를 응답할 때 의도적으로 2~5초 지연응답
