# Github으로 따라하는 버전 관리
## 강좌정보
-  '부스트캠프 AI Tech'에서 제공된 학습의 일부fh 버전관리 및 협업을 통한 개발의 기초

## 수강목적 & 기대효과
- Git과 Github을 이해하고, 저장소(Repository)를 만들 수 있습니다.
- commit/push/pull 등의 용어를 구분하고 저장소를 업데이트 할 수 있습니다.
- branch를 통해 버전을 관리하고, Pull request를 요청하여 협업을 할 수 있습니다.

## 학습방법
- 수강기간: 2022.09.11~2022.09.12

## 배운 것
### 태도
- 복잡하고 이거 어떻게 사람이 쓰지라고 생각하는 것도, 필요한 부분을 학습하고 사용하면 된다.
    - 복잡함이 과도해지면 복잡도를 해소하기 위한 방법을 생각해 보아야 한다.
    - 극단적 상상으로 학습을 시작해 보자(배우는 이유와 필요가 명확해진다.)
### 스킬
- 
### 지식
- dropbox: 깃의 형상관리처럼 일반인에게 파일의 공유 및 관리기능 제공에서 출발

## Git 기초
### Git과 Github란?
- 짧게도, 길게도 학습할 수 있는 것이 깃
- git client
    - git cli, VSCode-git, ...
- git server
    - Github.com, ...
- git client -> git hub -> 여러 client로 동기화
### Create Repository & Commit
- repository: git 저장소
- commit: 버전을 기록함(세이브와 같다)
    - github 내에서 수정, 파일로 등록, git cli에서 `push`
### github issues
- issues: 코드를 보면서 얘기를 나눌 수 있는 공간
- 업무용 게시판이라고 생각하자
- `이슈생성->이슈종료`의 생명주기
### Clone Repository & git config
- clone: github에 올라와 있는 파일을 내 컴퓨터(로컬) 환경에 복제
    - repository 내 code 버튼으로 HTTPS/SSH 주소 사용
    - VSCode 에서 `cmd+,` `Files: Exclude` 통해서 `**/.git` 폴더 숨김을 해제할 수 있다.
    - VSCode Git Graph 익스텐션 사용시 히스토리 확인 가능(어디를 수정 했는지 쉽게 파악할 수 있다.)
- config: commit한 사람을 인증(누구인지 확인)
    - $`git config --global user.name ~`
    - $`git config --global user.email ~`
### git push
- push: 로컬의 커밋 내용을 원격저장소(origin)에 업로드
- 분산관리 시스템, 인터넷이 끊겨도 동작하고 있다.(서로의 버전이 달리지는 문제가 생긱 수 있다.)
- 정교한 관리를 위해서 push를 활용해 수동으로 원격저장소에 변경사항을 전달한다.
### git pull
- pull: 원격저장소에 업데이트 된 사항 로컬환경에 적용(fetch & merge 과정임)
- 다른 팀원이 본인의 작업물을 push 함으로 원격저장소에 변화 -> pull -> 로컬 업데이트
- VSCode 뷰-명령팔레트(`cmd+Shift+p`) -> git push/pull 명령이 가능하다.
- 동기화 시점을 내가 결정할 수 있다.
### git fetch & merge
- 싱크 버튼 활용시 풀->푸쉬 진행
    - 원격저장소에 변동이 있다면, 푸쉬 제한(오버라이팅 방지)
    - 충돌 발생 -> 변경사항 머지
- fetch는 원격저장소에 있는 내용을 로컬 저장소로 가져옴
    - 로컬 저장소와 원격 저장소와의 차이를 비교
    - 충돌되는 상황은 발생하지 않는 지, 충돌한다면 이를 어떻게 해결하면 좋을지를 확인
- merge를 통해 두 브랜치를 병합
### git init & add
- git init: 로컬에서 git을 활용하는 방법
- git add: git commit 전 stage에 작업을 쌓아두는 것
### git checkout
- 
### git remote
- 

## Git을 통해 협업하기
### Create branch
- 
### Merge into current branch
- 
### Co-working
- 
### Conflict
- 
### Pull request
- 
### Pull request & Conflict- 