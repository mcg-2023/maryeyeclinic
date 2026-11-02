# 주례성모안과 홈페이지

PPT 리뉴얼 기획안과 인터랙션 명세를 반영한 홈페이지 소스입니다.

소스와 적용 명세는 [website](website/) 폴더에서 확인할 수 있습니다.

## 로컬 실행

Node.js가 설치된 환경에서 실행합니다.

```sh
cd website
node build.cjs
node check.cjs
node server.cjs
```

미리보기: http://127.0.0.1:4173

메인 페이지: website/dist/index.html
상세 구성과 미확인 자료: [website/README.md](website/README.md)
인터랙션 명세: [website/homepage-effects.md](website/homepage-effects.md)

## GitHub Pages

https://mcg-2023.github.io/maryeyeclinic/

GitHub Pages publishes the root of the `gh-pages` branch. After building and committing changes, run `git subtree push --prefix website/dist origin gh-pages` from the repository root. The static chatbot uses bundled QA data.
