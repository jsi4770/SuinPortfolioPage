# Activities 데이터 작성 가이드

이 폴더의 각 `.md` 파일은 하나의 대외활동을 나타냅니다.

## Frontmatter 필드
- `title.ko` / `title.en`: 활동명
- `description.ko` / `description.en`: 한 줄 설명
- `date`: `YYYY-MM-DD`
- `duration`: 활동 기간 텍스트
- `thumbnail`: `/public/images/activities/` 하위 이미지 경로
- `organization`: 소속/주최 기관명
- `position`: 직책/역할
- `tech_stack`: 관련 기술 배열 (없으면 빈 배열)

## 본문 작성 규칙
`## 섹션명` (한국어) 다음에 `---`, 이어서 `## Section Name` (영어) 순서로 작성합니다.
