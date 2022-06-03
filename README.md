# sungkyu

<img src='./front/public/black_logo.svg'>

<br>

[Sungkyu](https://sungkyu.info)

sungkyu는 프론트엔드 개발자 임성규의 포트폴리오 및 기술 블로그 기능을 포함한 웹 서비스입니다.

개발과 관련된 공부 기록 및 느낀점을 기록하며 끊임없이 성장하기 위해 만들게 되었습니다.

지속적으로 코드 리팩토링 및 기능 추가가 계획되어 있습니다.

사이트 이용시 버그를 발견한다면 issue 또는 qwe6293@nate.com으로 메일 보내주시면 감사하겠습니다!

<br>

## 기능 추가 및 버그 수정

<details>
    <summary>22.05</summary>
<br />

#### .05 블로그 게시물 수정 시 태그 개수 증가 버그 수정
- 블로그 게시물 수정 시에 기존의 태그의 개수가 +1 증가하는 현상, 백엔드 태그 등록 로직 문제로 인해 버그 수정 [#105](https://github.com/JhsK/sungkyu/issues/105)

#### .09 Google Analytics 연동
- Google Analytics 연동을 통한 사용자 접속 유형 및 기록(통계) 확인 [#108](https://github.com/JhsK/sungkyu/issues/108)

#### .12 moment.js → day.js 로 날짜 표현 라이브러리 변경
- moment.js → day.js로 변경을 통한 번들 사이즈 감소 및 웹 성능 최적화 [#110](https://github.com/JhsK/sungkyu/issues/110)

#### .27 블로그 게시물 작성 후 게시물 리스트 최신화 적용 버그 수정
- 블로그 게시물 작성 후 게시물 리스트에는 방금 작성했던 게시물이 화면에 표시되지 않는 버그 발생으로 invalidQueries 호출의 순서 차이로 인해 발생하여 버그 수정 [#113](https://github.com/JhsK/sungkyu/issues/113)

#### .28 블로그 게시물 제목 글자 제한 버그
- 블로그 게시물 제목 글자수가 영문기준 30글자이므로 한글로 작성시 15자 이상 시 에러 발생으로 인해 DB migraion으로 글자수 변경을 통해 버그 수정 [#114](https://github.com/JhsK/sungkyu/issues/114)

#### .31 Toast ui editor 이미지 드래그 업로드 기능 개발
- 블로그 게시물 작성 시 이미지 드래그를 통해 에디터에 이미지 표현할 수 있도록 기능 개발, toast ui editor 기존 hook 커스텀을 통해 구현 [#122](https://github.com/JhsK/sungkyu/issues/122)
</details>

<details>
    <summary>22.04</summary>
<br />

#### .27 블로그 게시물 미리보기 텍스트 마크다운 문법 제거
- 블로그 게시물 리스트에서 미리보기 부분 텍스트에 마크다운 문법이 그대로 나오는 현상, 정규 표현식으로 버그 수정 [#102](https://github.com/JhsK/sungkyu/issues/102)

#### .25 메인 페이지 접속시 색상 버그 수정
- 메인 페이지 처음 접근할 경우 화이트로 나타난 후 의도된 배경 색상 적용으로 인해 UX가 좋지 않아 버그 수정 [#100](https://github.com/JhsK/sungkyu/issues/100)

#### .20 블로그 게시물 글자 크기 변경
- 게시물 자세히 보기 화면 시 글자 크기가 작아 가독성이 좋지 않아서 기존 에디터 css 오버라이드를 통해 글자 크기 변경 [#97](https://github.com/JhsK/sungkyu/issues/97)

#### .12 About 페이지 리뉴얼
- About 페이지 디자인 및 기존에 작성된 기술 스택 모두 제거 및 인턴 경력 내용 추가 [#94](https://github.com/JhsK/sungkyu/issues/94)

#### .05 마우스 스크롤 애니메이션 추가
- 메인 페이지 하단에 스크롤을 유도하기 위한 마우스 스크롤 애니메이션 추가 [#91](https://github.com/JhsK/sungkyu/issues/91)

#### .03 완성된 Sungkyu 프로젝트 관련 데이터 추가
- 메인 페이지 및 포트폴리오 페이지에 들어가는 프로젝트 데이터 추가 [#88](https://github.com/JhsK/sungkyu/issues/88)
</details>

<details>
    <summary>22.03</summary>
    <br />

#### .31 태그 수정 버그
- 블로그 게시물을 수정할 경우 새롭게 태그 추가가 안되는 버그 발생 [#83](https://github.com/JhsK/sungkyu/issues/83)

#### .30 게시물 전체 글 보기 버튼 추가
- 블로그 게시물 목록에서 태그 필터링 후에 전체글을 다시 볼 수 있는 버튼이 없어서 새롭게 추가 [#80](https://github.com/JhsK/sungkyu/issues/80)

#### .26 게시물 검색창 입력시 리렌더링 문제 최적화 적용
- 블로그 게시물 검색창에 입력시 게시물 리스트 전체가 모두 리렌더링 되는 문제가 발생하여 입력창만 렌더링 되도록 최적화 적용 [#78](https://github.com/JhsK/sungkyu/issues/78)

#### .24 게시물 검색창 입력시 리렌더링 문제 최적화 적용
- 블로그 게시물에서 태그 필터링 기능이 작동하지 않는 버그 수정 [#73](https://github.com/JhsK/sungkyu/issues/73)

#### .22 갤럭시 폴드와 같은 화면이 작은 디바이스 반응형 보완
- 갤럭시 폴드와 같은 화면이 작은 디바이스에서 화면이 잘리거나 정렬이 되지 않는 버그 수정 [#67](https://github.com/JhsK/sungkyu/issues/67)

#### .19 게시물 수정 시 기존 작성된 태그가 나타나지 않는 버그
- 블로그 게시물 수정 시에 기존에 저장된 태그가 보이지 않는 버그 수정 [#63](https://github.com/JhsK/sungkyu/issues/63)

#### .17 게시물 삭제시 삭제한 게시물에 포함된 태그 삭제로 수정
- 블로그 게시물 삭제시 삭제한 게시물에 포함된 태그도 같이 삭제되도록 수정 및 태그 개수 확인할 수 있도록 추가 [#62](https://github.com/JhsK/sungkyu/issues/62)

#### .15 게시물 날짜순 필터링 버그
- 블로그 게시물 중 작성날짜 오름차순 기능이 동작하지 않는 버그 수정 [#61](https://github.com/JhsK/sungkyu/issues/61)

#### .14 모바일 반응형 글자 깨짐 버그
- 블로그 게시물 리스트에서 태그 글자 짤림 및 날짜순 필터링와 게시물 제목 겹치는 반응형 버그 수정 [#58](https://github.com/JhsK/sungkyu/issues/58)

</details>

<br>

## Stack

<img src='https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/stack.png' width=1000 >


<br>

## View

모든 페이지는 모바일, 테블릿, PC 등 기기에 반응형이 적용되어 있습니다.

### Index page

<img src='https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/index_page.png'>

<br><br>

### About page

<img src='https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/screencapture-sungkyu-info-about-2022-05-10-11_26_02.png'>

<br><br>

### Project page

markdown 파일을 파싱하여 toast editor를 이용하여 진행한 프로젝트에 대해 표현합니다.

<img src='https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/project_index.png'>

<img src='https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/project_detail.png'>

<br><br>

### Blog page

인티니트 스크롤링, 태그, 필터 기능이 포함되어 있습니다.

<img src='https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/blog_index.png'>

<img src='https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/blog_detail.png'>

<br><br>

### Contact page

<img src='https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/contact_page.png'>