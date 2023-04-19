# 프로젝트 실행 방법

1. git clone https://github.com/pparksang1013/wanted-pre-onboarding-frontend.git.
2. `npm i`를 통해 필요한 package 설치를 한다.
3. 최상단 디렉토리에 .env 파일 생성
4. `REACT_APP_API=API주소`를 입력한다.
5. `npm start`를 통해 프로젝트 실행완료

### API 주소

"https://www.pre-onboarding-selection-task.shop/"

### packages

-   axios 1.3.5
-   styled components 5.3.9
-   react router dom 6.10.0

</br>

#### 디렉토리 구조

```
📦 src
├── 📂 api          // Axios API
├── 📂 component
│ ├── 📂 sign       // Sign router에 들어가는 페이지
│ │ ├── 📄 SignComponent
│ ├── 📂 todo       // Todo router에 들어가는 페이지
│ │ ├── 📄 TodoForm
│ │ ├── 📄 TodoList
├── 📂 hooks        // Custom hooks
├── 📂 router
│ ├── 📄 Main
│ └── 📄 Signin
│ └── 📄 Signup
│ └── 📄 Todo
└── 📂 style
```

## 배포링크

https://celadon-daifuku.netlify.app

### :: 1. LOGIN

Assignment 1

-   회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 **검사기능을 구현**해주세요

-   이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요

-   입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 **button에 disabled** 속성을 부여해주세요

Assignment 2

-   회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

![회원가입](https://user-images.githubusercontent.com/125449198/233083229-670e2f64-5a81-458a-8403-a55c3bcc77f6.gif)

Assignment 3

-   로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요

-   로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
    응답받은 JWT는 로컬 스토리지에 저장해주세요

Assignment 4

-   로그인 여부에 따른 리다이렉트 처리를 구현해주세요

-   로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
    로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요

![로그인](https://user-images.githubusercontent.com/125449198/233083431-6164afee-d352-4ca3-b470-c2830e7db221.gif)

### :: 2. TODO

Assignment 5

-   /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요.

-   목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.

-   TODO의 완료 여부는 <input type="checkbox" />를 통해 표현해주세요

-   TODO는 <li> tag를 이용해 감싸주세요

Assignment 6

-   리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요

-   TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여해주세요

-   TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여해주세요

-   추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

-   TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

Assignment 7

-   TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

Assignment 8

-   TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

-   수정 버튼에는 data-testid="modify-button" 속성을 부여해주세요

-   삭제 버튼에는 data-testid="delete-button" 속성을 부여해주세요

Assignment 9

-   투두 리스트의 삭제 기능을 구현해주세요

-   투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

Assignment 10

-   투두 리스트의 수정 기능을 구현해주세요

-   TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요

-   수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.

-   수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요

-   수정 input창에는 data-testid="modify-input" 속성을 부여해주세요
    수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요

-   제출버튼에는 data-testid="submit-button" 속성을 부여해주세요

-   취소버튼에는 data-testid="cancel-button" 속성을 부여해주세요

-   제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요

-   취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

![투두리스트](https://user-images.githubusercontent.com/125449198/233083535-a1822a9b-7fb0-45c9-840e-fcc938e4753f.gif)

**리다이렉트**
![리다이렉트](https://user-images.githubusercontent.com/125449198/233083680-7f89f9e5-f003-4e13-98f7-b8051e9b4453.gif)
