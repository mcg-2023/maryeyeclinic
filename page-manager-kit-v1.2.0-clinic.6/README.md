# 관리자 페이지 패키지 1.2.0-clinic.6

기존 clinic.5의 게시글·이미지 편집 기능에 방문자통계를 추가한 **Vercel + Supabase용** 패키지입니다.

- 방문자·페이지뷰·신규/재방문·체류·이탈률·추이
- 유입경로·기기·OS·브라우저·봇·UTM
- 인기 페이지·클릭/스크롤 이벤트·세션별 이동 경로·접속 IP
- 관리자 인증·통계 사이트/허용 도메인 관리
- Supabase 전용 SQL/RLS/RPC, Vercel Node.js 24 starter, 빌드된 자산

**설치는 [Vercel-Supabase-배포안내.md](Vercel-Supabase-배포안내.md)를 따라주세요.**

새 Supabase는 supabase/01-new-project.sql, 기존 clinic.5는 supabase/02-analytics-upgrade.sql을 실행합니다. 설치 파일은 mcg-page-manager-1.2.0-clinic.6.tgz이며 starter/vendor에도 동일 파일이 들어 있습니다.

기존 프로젝트의 설정·게시글·이미지를 유지한 채 새 tgz 설치 → 자산 빌드 → 추적 스크립트 추가 → Vercel 재배포 순서로 적용합니다. 현재 PHP 사이트와 기존 ZIP은 수정하지 않았습니다.

실제 환경변수·비밀번호·방문 기록·DB·node_modules는 포함하지 않습니다. 기본 공개 템플릿은 추적 스크립트가 연결되어 있습니다.
