<div align="center">
  <h3 align="center">NestJS Github OAuth API</h3>

  <p align="center">
    NestJS Github OAuth API를 학습하기 위한 저장소입니다. <br/> 
    <br />
    <a href="https://github.com/baobabnamu/nestjs-github-oauth"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/baobabnamu/nestjs-github-oauth/issues">Report Bug</a>
    ·
    <a href="https://github.com/baobabnamu/nestjs-github-oauth/issues">Request Feature</a>
  </p>
</div>



## Installation

- Clone the repo  
   ```sh
   git clone https://github.com/baobabnamu/nestjs-github-oauth.git
   ```
- NestJS Start
   ```sh
   npm run start:dev
   ```
<br/>

## How to Test
react-github-oauth 프로젝트 실행 후 Github 액세스 토큰을 발급 받기 위한 코드를 얻어내야 합니다.  
해당 코드를 /github-info 끝점에 전달하면 됩니다.

<br/>
<br/>

## Environment Table

| Variable           | dev | qa/prod |  Example                 | Explanation                                                                         |
| ------------------ | :-: | :-----: | :-----------------------: | ----------------------------------------------------------------------------------- |
| CLIENT_ID | ✅ | ✅ | 임의의 문자열 값 | Github Developer Setting에서 생성할 수 있습니다. |
| CLIENT_SECRET | ✅ | ✅ | 임의의 문자열 값 | Github Developer Setting에서 생성할 수 있습니다. |
