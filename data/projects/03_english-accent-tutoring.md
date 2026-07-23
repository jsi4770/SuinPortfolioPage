---
title:
  ko: "스픽업 — AI 영어 액센트 코치"
  en: "SpeakUp — AI English Accent Coach"
description:
  ko: "실전 표현과 말하기 연습을 돕는 AI 영어 튜터링 서비스"
  en: "An AI-powered tutoring service that helps learners practice real-world English speaking and expressions"
date: "2026-05-01"
status: "진행 중"
duration: "2026.05 ~ 현재"
thumbnail: "/images/projects/english-speaking-coach-thumb.png"
tech_stack: ["Swift", "React Native", "Django", "MySQL", "Azure Speech Service"]
links: []
---

## 개요
AI 음성 분석·생성 기술로 미국식·영국식·호주식 등 다양한 영어 악센트를 학습하고, 사용자의 발음을 실시간으로 분석·교정해주는 AI 영어 스피킹 튜터링 서비스입니다. 발음 정오답 판정을 넘어, 목적지 국가의 억양 리듬과 현지 표현까지 함께 배울 수 있는 실전형 학습 경험을 목표로 합니다. AI 창업동아리에서 개발 중입니다.

---

## Overview
An AI speaking-tutoring service that uses speech analysis and generation to teach American, British, and Australian English accents, analyzing and correcting a learner's pronunciation in real time. Beyond simple right/wrong pronunciation checks, it aims to teach the rhythm and intonation of a target-country accent along with locally natural expressions. Currently in development at the AI Startup Club.

## 문제 인식
- 기존 영어 학습 서비스(스픽, 야나두, 듀오링고, 볼드보이스 등) 대부분이 미국식 발음 하나로 고정돼 있어, 유학·워킹홀리데이·이민처럼 목적지 국가가 명확한 학습자의 니즈를 충족하지 못한다.
- 발음 정확도 위주의 피드백에 그쳐, 문장의 억양·리듬이나 지역별 어휘·슬랭 차이는 다루지 않는다.
- 취업 준비생, 유학·이민 준비자에게는 인터뷰·해외 미팅처럼 "발음이 평가받는 순간"에 대한 불안이 크고, 이는 결제 동기로 직결되는 명확한 시장 수요다.

---

## Problem Recognition
- Most existing English learning services (Speak, Yanadoo, Duolingo, Bold Voice, etc.) are locked into a single American accent, failing learners whose destination country — for study abroad, working holiday, or immigration — is already set.
- Feedback tends to focus only on pronunciation accuracy, without addressing sentence-level rhythm/intonation or region-specific vocabulary and slang.
- Job seekers and those preparing to study or immigrate abroad feel real anxiety in moments where their accent is directly judged (interviews, overseas meetings), and that anxiety translates directly into willingness to pay.

## 솔루션
**기술 스택**: Swift, React Native, Django, MySQL, Azure Speech Service

**핵심 기능**:
- 영국·호주식 '리듬'까지 코칭 — 단어 발음뿐 아니라 문장의 높낮이와 말하는 리듬(억양)까지 분리해서 교정
- 현지 맞춤형 표현 추천 — 미국식 표현을 쓰면 AI가 실시간으로 개입해 목적지 국가의 자연스러운 현지 표현(예: 영국의 chemist's)을 제안
- 게임처럼 쉬운 성적표 — "런던 출근 3일 차, 영국인 싱크로율 58%"처럼 직관적인 점수로 흥미를 유도하고 부족한 부분만 콕 집어 코칭

---

## Solution
**Tech Stack**: Swift, React Native, Django, MySQL, Azure Speech Service

**Key Features**:
- Coaching down to accent "rhythm" — corrects not just word-level pronunciation but sentence intonation and speech rhythm, British and Australian included
- Localized expression recommendations — when a learner uses an American phrase, the AI steps in with the natural local equivalent (e.g., "chemist's" in the UK)
- A game-like "report card" — intuitive scores like "Day 3 commuting in London, 58% British sync rate" make progress fun while pinpointing exactly what to fix
