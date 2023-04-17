# :: 1. LOGIN

Assignment 1

-   ~~회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요~~

이메일 조건: @ 포함  
비밀번호 조건: 8자 이상

이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위, 비밀번호 확인 조건을 추가하는 행위 등은 지양해주세요)

-   ~~입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요~~

Assignment 2

-   ~~회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요~~

Assignment 3

-   ~~로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요~~

로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.

-   ~~응답받은 JWT는 로컬 스토리지에 저장해주세요~~

Assignment 4  
~~로그인 여부에 따른 리다이렉트 처리를 구현해주세요~~

~~로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요~~

~~로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요~~

# :: 2. TODO LIST

Assignment 5

-   /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
-   목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
-   TODO의 완료 여부는 <input type="checkbox" />를 통해 표현해주세요
-   TODO는 <li> tag를 이용해 감싸주세요

Assignment 6

-   ~~리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요~~

-   ~~TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여해주세요~~

-   ~~TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여해주세요~~

-   ~~추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요~~

-   TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

### API 주소

"https://www.pre-onboarding-selection-task.shop/"

### 사용 라이브러리

-   axios
-   styled components
