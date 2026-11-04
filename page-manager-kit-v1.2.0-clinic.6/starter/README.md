# Vercel + Supabase용 starter

상위 폴더의 `Vercel-Supabase-배포안내.md`를 먼저 확인하세요. SQL은 이 폴더의 `supabase/`에도 동일하게 들어 있습니다.

로컬 미리보기: `npm install`, `npm run build`, `npm run dev`

운영은 Vercel Root Directory를 이 starter로 지정하고 Supabase 환경변수를 설정합니다. 운영 요청은 api/index.js가 처리하고 로컬 server.mjs는 배포에서 사용하지 않습니다.
