# :: 원티드 프리온보딩 프론트엔드 코스 사전과제 - 답안

# :: 과제 답안

---

## Assignment 1 - `Login`

- 주요 과제
  1. 로그인 컴포넌트 개발
  2. 렌더링 최적화를 위한 Ref 적용
  3. Local Storage에 로그인 정보 저장
  4. 로그인 완료시 메인 페이지로 이동

<details>
<summary>답안</summary>
<div markdown="1">

### 1. 로그인 컴포넌트 개발
- 과제 범위는 `input` 2개, `button` 1개를 사용하여 로그인 화면을 구성하는 것이었으므로, `input` 2개, `button` 1개를 포함한 다른 요소들을 사용하여 요구사항을 구현했습니다.
  <details>
  <summary>관련 자료</summary>
  <div markdown="1">

  - Login 컴포넌트 관련 디렉토리 ([링크](https://github.com/godcl1623/wanted-pre-onboarding-fe/tree/main/src/components/Login))
    - ![LoginDir](https://user-images.githubusercontent.com/20578093/175815111-25644bac-54e8-4e73-8c1b-118a1b6246bb.png)
  - 데스크톱 화면
    ![Login](https://user-images.githubusercontent.com/20578093/175815087-bcbcea33-8ab2-405a-b019-0f462629239b.png)
  - 모바일 화면
    ![LoginMobile](https://user-images.githubusercontent.com/20578093/175815116-f3b67a05-c360-4fe1-a54e-007ec66d55e8.png)

  </div>
  </details>

### 2. 렌더링 최적화를 위한 Ref 적용
- 렌더링 최적화를 위해 Ref를 적용할 경우, 떠올릴 수 있는 방법은 State로 저장할 데이터를 Ref로 저장하는 방법입니다.
  - Ref의 특징은 `컴포넌트 라이프 사이클동안 유지가 되며, 변경이 가능`한 점과, `값이 변할 때 렌더링이 되지 않는` 점 2가지입니다.
- 다른 프로젝트에서 로그인 단계에서 사용하던 State는 보통 `로그인 상태`와 `사용자 정보` 2가지였습니다.
  - 이 중 `로그인 상태`는 이를 감지해 UI를 변경하는데 사용할 수 있으므로 State로 사용할 필요가 있으므로 `사용자 정보`를 Ref로 만들어 사용했습니다.

### 3. Local Storage에 로그인 정보 저장
- Local Storage에 데이터를 저장하기 위해서는 `setItem()` 메소드를 사용합니다.
  - `localStorage.setItem(키, 값)`

### 4. 로그인 완료시 메인 페이지로 이동
- 아래 `과제 4. Routing` 부분에서 메인 페이지로 이동하는 기능을 구현할 수도 있지만, 이 단계에서는 Ternery Expression을 사용해 

</div>
</details>

## Assignment2 - `GNB`

- 주요 과제
  1. GNB 레이아웃 구현
  2. GNB에 `sticky` position 구현
  3. GNB에 모바일 레이아웃 적용

<details>
<summary>답안</summary>
<div markdown="1">

### 1. GNB 레이아웃 구현
- 레이아웃을 구현하되, 가장 오른쪽 버튼은 Logout으로, 검색 창은 `input` 요소만으로 구현했습니다.

  <details>
  <summary>관련 자료</summary>
  <div markdown="1">
  
  - GNB 디렉토리 ([링크](https://github.com/godcl1623/wanted-pre-onboarding-fe/tree/main/src/components/Gnb))
    - ![GmbDir](https://user-images.githubusercontent.com/20578093/175815828-15344c40-2e4d-4b5b-a06f-49d786397180.png)
  - 데스크톱 화면
    ![Gnb](https://user-images.githubusercontent.com/20578093/175815856-e19a4e7a-70db-4fa9-b9e2-bfff408930c0.png)
  - 모바일 화면
    ![GnbMobile](https://user-images.githubusercontent.com/20578093/175815911-4278c474-a123-4b8d-b75f-ebd63a977f48.png)

  </div>
  </details>

### 2. GNB에 `sticky` position 구현
- GNB에 `position: sticky`, `top: 0` 속성을 부여해 고정된 위치에서 화면을 따라오도록 구현했습니다.
- `sticky` position을 적용할 때 몇 가지 주의사항이 있습니다.
  1. 중간에 `overflow: hidden` 속성이 부여된 요소가 있을 경우 `sticky` 속성이 적용되지 않습니다.
  2. `body` 요소의 `height`을 `100%`로 설정한 경우, 스크롤이 viewport height 영역을 벗어날 때 sticky 요소가 자동으로 숨겨집니다.
     - `height` 대신 `min-height`을 설정하던지, `overflow: auto` 속성을 부여해 문제를 해결할 수 있습니다.

### 3. GNB에 모바일 레이아웃 적용
- GNB를 크게 3가지 `section`으로 나눠 동일한 `width`를 부여, GNB에는 `justify-content(row 기준) space-between`을 부여합니다.
- media query를 사용해 너비 `600px`부터 `input` 요소를 숨겨 모바일 레이아웃을 구현했습니다.

</div>
</details>

## Assignment3 - `Validation`

- 주요 과제
  1. 이메일, 비밀번호 유효성 검사를 위한 정규표현식 작성
  2. 입력된 정보의 DB 등록 여부 검사
  3. 유효성 검사를 통과하지 못한 경우를 CSS로 표현

<details>
<summary>답안</summary>
<div markdown="1">

### 1. 이메일, 비밀번호 유효성 검사를 위한 정규표현식 작성
- 이메일: `/^[a-zA-Z0-9+-_/]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/`
- 비밀번호: `/^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9$@$!%*?&]{8,}/`
- `regex.test()` 메소드를 사용해 유효성 검사를 진행했습니다.

### 2. 입력된 정보의 DB 등록 여부 검사
- public 폴더에 userinfodemo.json ([링크](https://github.com/godcl1623/wanted-pre-onboarding-fe/blob/main/public/data/userinfodemo.json)) 파일을 만들어 사용자 정보를 저장했습니다.
- 양식
  - 기본적으로 숫자를 인덱스로 사용해 사용자 정보를 저장합니다.
  - 사용자 정보는 id, pwd, nickname이 저장되어 있습니다.
    id, pwd는 로그인 인증에, nickname은 Feeds에서 댓글을 작성하는데 사용합니다.
- Login 컴포넌트에서 로그인 폼에 사용자 정보가 입력, submit된 경우 axios를 통해 사용자 정보 DB에 입력된 정보가 있는지 검사합니다.
  - 정보가 존재할 경우 Local Storage에 저장하는 한편, `loginState` 상태를 `true`로 바꾸며 메인 페이지로 이동하게 됩니다.
  - 정보가 존재하지 않을 경우 `alert()`을 통해 사용자 정보가 존재하지 않는다고 알립니다.

### 3. 유효성 검사를 통과하지 못한 경우를 CSS로 표현 ([링크](https://github.com/godcl1623/wanted-pre-onboarding-fe/blob/main/src/components/Login/Login.jsx))
- 유효성 검사는 불일치할 경우 다음 2가지로 나타냅니다.
  - 입력 `input`: 값을 입력한 후 `input`에서 포커스가 제거될 때 유효성 검사를 진행, 불일치할 경우 `border`를 빨간색으로 변경합니다.
  - `submit` 버튼: 기본적으로 `opacity`를 부여해 흐리게 처리, `pointer-events` 속성을 `none`으로 설정해 클릭을 방지합니다.
    - 아이디, 비밀번호 모두 포커스가 제거되어 유효성 검사가 진행되면 버튼이 다시 활성화되는 것을 의도했으나, 값 입력 후 엔터 키를 누르면 유효성 검사를 건너뛰는 문제가 발생했습니다.
    - `useEffect`로 window에 keydown 이벤트에 대한 리스너를 부여한 후, 엔터 키가 눌릴 경우 강제로 input 요소에서 포커스를 없애는 동작을 수행하도록 만들었습니다.

<details>
<summary>관련 자료</summary>
<div markdown="1">

  - 유효성 검사 예시
    ![invalid](https://user-images.githubusercontent.com/20578093/175817059-b8e2b135-448b-46bc-b8f8-a9d19886f444.png)

</div>
</details>

</div>
</details>

## Assignment4 - `Routing`

- 주요 과제
  - 로그인, 로그아웃 시 라우팅 로직을 통해 페이지가 이동하도록 구현(단, history push 사용 금지)

- 답안 ([링크](https://github.com/godcl1623/wanted-pre-onboarding-fe/blob/main/src/App.js))
  - react-router-dom의 Routes, Route, useNavigate를 사용해 라우팅을 구현했습니다.
  - Login 컴포넌트는 주소를 `/`, 메인 컴포넌트는 주소를 `/main`으로 설정했습니다.
  - 로그인 유효성 검사, 인증을 통과해 `loginStat` 상태가 `true`로 변할 경우, `useNavigate().navigate()` 메소드를 사용해 주소를 이동합니다.

## Assignment5 - `Feeds`

- 주요 과제
  1. 피드 컴포넌트 개발
  2. 3개 이상의 피드 정보를 json으로 저장
  3. 피드 컴포넌트에 모바일 레이아웃 적용
  4. image.onload를 사용해 피드 이미지가 로딩된 후 컴포넌트가 로딩 되도록 구현
  5. 피드에 댓글 작성 기능 구현

<details>
<summary>답안</summary>
<div markdown="1">

### 1. 피드 컴포넌트 개발 + 모바일 레이아웃 적용
- 인스타그램 레이아웃을 참고하여 구현했습니다.
  <details>
  <summary>관련 자료</summary>
  <div markdown="1">

  - 피드 디렉토리 ([링크](https://github.com/godcl1623/wanted-pre-onboarding-fe/tree/main/src/components/Feeds))
    - ![feedsDir](https://user-images.githubusercontent.com/20578093/175817491-10c2cf1f-caee-4230-93c4-e5386c6bdc03.png)

  - 데스크톱 화면
    ![feeds](https://user-images.githubusercontent.com/20578093/175817431-29e660fe-6454-407b-b3dc-e55f92a6ec0a.png)

  - 모바일 화면
    ![feedsMobile](https://user-images.githubusercontent.com/20578093/175817704-de980dba-5720-41d4-a691-5c8c76830349.png)


  </div>
  </details>

### 2. 3개 이상의 피드 정보를 json으로 저장 ([링크](https://github.com/godcl1623/wanted-pre-onboarding-fe/blob/main/public/data/feedsdb.json))
- 사용자 정보와 마찬가지로 숫자를 인덱스로 사용해 데이터를 저장했습니다.
- 양식
  - id: 피드의 아이디입니다.
  - author: 작성자 정보를 저장합니다.
    - profile: 사용자 프로필 이미지 주소를 저장합니다.
    - nickname: 작성자의 별명을 저장합니다.
  - postInfo: 피드 본문 정보를 저장합니다.
    - picture: 피드 본문에 게재되는 사진 주소를 저장합니다.
    - likes: 피드가 받은 '좋아요' 숫자입니다.
    - text: 작성자가 작성한 피드 본문입니다.
    - tags: 작성자가 작성한 태그 목록입니다.
  - comments: 피드에 작성된 댓글 목록입니다.
    - author: 댓글 작성자의 별명을 저장합니다.
    - comment: 댓글 본문을 저장합니다.
- 사용자 정보와 마찬가지로 axios를 사용해 불러오되, 피드 개수에 따라 `map()` 메소드를 사용해 다수의 피드를 한 번에 표시할 수 있도록 작성했습니다.

### 3. image.onload를 사용해 피드 이미지가 로딩된 후 컴포넌트가 로딩되도록 구현
- `useEffect`에서 `new Image()`를 사용해 이미지 요소를 생성, `src`로 이미지 주소를 부여한 후 `onload` 메소드에 컴포넌트 표시를 위한 `State(= setIsImgLoaded)`를 `true`로 변경하도록 만들어 요구사항을 구현했습니다.
- 처음에는 이미지가 로딩되기 전까진 단순히 Loading이라는 문구만 출력되도록 했으나, 미관상 좋지 않다고 판단하여 다른 방법을 선택했습니다.
- 참고 이미지와 같이 피드의 기본 레이아웃을 만들고 별도의 데이터를 전달하지 않아 빈 피드만 표시되도록 만든 후, 이미지가 로딩되면 나머지 정보도 같이 표시되도록 만들었습니다.

  <details>
  <summary>참고 이미지</summary>
  <div markdown="1">

  ![feedsDummy](https://user-images.githubusercontent.com/20578093/175817902-0023ab56-dbb3-416e-9243-91b9b5eac482.png)

  </div>
  </details>

</div>
</details>