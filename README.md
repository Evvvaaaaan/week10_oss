# OSS HW

# Project Information

- 기계식 키보드 소리와 함께 컴퓨터공학 영어 단어를 연습하는 1분 타자 프로그램입니다.
- 타자 연습을 하면서 컴퓨터공학에서 배우는 단어도 익힐 수 있어서 이 프로젝트를 선택해 ㅆ습니다.
- 원본 GitHub: https://github.com/tplai/kbsim
- 라이선스: MIT License, 원저작자 Thomas Lai. 자세한 내용은 LICENSE.md를 참고하세요.

# Installation

- Node.js와 npm을 설치한 후 프로젝트 폴더에서 npm install을 실행합니다.
- npm start를 실행하고 터미널에 표시되는 로컬 주소를 브라우저에서 엽니다.
- 배포용 파일은 npm run build로 생성합니다.
- 실행 화면: screenshots/current.png

# Source Code Exploration

## 주요 파일

- src/index.js: React 앱을 실행하고 Redux 저장소를 연결합니다.
- src/features/store/store.js: 키보드, 타자 시험, 테마 상태를 모아 관리합니다.
- src/features/typingTest/wordlist.js: 타자 연습에 사용할 컴퓨터공학 영어 단어를 저장합니다.

## 주요 컴포넌트

- KeySimulator: 키보드를 표시하고 키 입력과 소리, 배열과 색상 선택을 처리합니다.
- TypingTest: 연습 단어와 입력창을 표시하고 입력 확인, 타이머, 결과 표시를 처리합니다.

## 코드 분석

- 선택한 코드: src/features/keySimulator/KeySimulator.js의 handleLayoutChange 함수, 78~82행의 5줄입니다.
- e.target.value로 선택한 배열을 찾고 parseKLE가 배열 데이터를 읽어 dispatch로 키보드 상태를 갱신합니다.
- blur로 선택 상자의 포커스를 해제하고 focus로 키보드 영역에 포커스를 옮겨 타자를 계속 입력할 수 있게 합니다.

# Customizing

- Text: src/features/header/Header.js에서 화면 제목을 kbsim에서 OSS HW로 변경했습니다.
- Style: src/features/theme/theme.js에서 흑백·회색 계열이던 밝은 테마와 어두운 테마를 파란색 계열로 변경했습니다.
- UI/Data: src/features/typingTest/wordlist.js에서 일반 영어 단어를 컴퓨터공학 영어 단어 88개로 변경했습니다.
- 수정 전 화면: screenshots/before.png
- 수정 후 화면: screenshots/current.png

# Deployment

- Vercel 배포 전입니다. 실제로 접근할 수 있는 배포 주소가 생성되면 추가할 예정입니다.

# Weekly Review

## 새롭게 배운 내용

- React 컴포넌트와 Redux 저장소를 통해 화면과 상태를 나누어 관리하는 방법을 살펴보았습니다.
- 키보드 소리를 활용하면 타자 연습에 더 몰입할 수 있다는 것을 알게 되었습니다. 앞으로도 소리를 활용한 서비스를 만들어 보고 싶습니다.
- 단어 목록과 테마 색상을 별도 파일에서 관리하면 화면 구조를 크게 바꾸지 않고도 콘텐츠와 디자인을 변경할 수 있다는 것을 알게 되었습니다.

## 어려웠던 점과 해결 방법

- 처음에는 의존성 버전이 맞지 않아 프로젝트가 실행되지 않았습니다. AI를 활용해 로컬 환경과 프로젝트의 버전을 비교하고 프로젝트 설정을 수정해 해결했습니다.

## AI 활용 내용 및 느낀 점

- AI를 사용해 의존성 버전 차이와 수정할 코드를 살펴보았습니다. 여러 파일을 직접 하나씩 확인하는 데 걸리는 시간을 줄일 수 있었고, 제안된 내용도 실제 코드와 실행 결과를 확인하는 과정이 필요하다고 느꼈습니다.
