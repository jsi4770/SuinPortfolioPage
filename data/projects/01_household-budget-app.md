---
title:
  ko: "넛지형 AI 재무 코칭 가계부"
  en: "Nudge-Based AI Financial Coaching Ledger"
description:
  ko: "실시간 AI 넛지와 대화형 코칭으로 지출 습관을 바꾸는 가계부"
  en: "A nudge-driven AI finance coach that transforms spending habits through real-time insights and conversational guidance"
date: "2026-07-24"
status: "진행 중"
duration: "2025.12 ~ 현재"
thumbnail: "/images/projects/osori-poster-thumb.jpg"
tech_stack: ["React", "Spring Boot", "PostgreSQL", "Gemini AI"]
links:
  - title:
      ko: "가계부 서비스"
      en: "Ledger Service Link"
    type: "link"
    url: "https://fincoach-app-beta.vercel.app/"
  - title:
      ko: "GitHub 저장소"
      en: "GitHub Repository"
    type: "link"
    url: "https://github.com/jsi4770/osori-v2"
  - title:
      ko: "관련 활동: Spring & React 풀스택 부트캠프"
      en: "Related Activity: Spring & React Full-Stack Bootcamp"
    type: "link"
    url: "/#08_fullstack-bootcamp"
---

## 개요
넛지형 AI 재무 코칭 가계부입니다. 영수증 OCR로 지출을 자동 인식하고, 이상 소비를 감지해 맥락 있는 넛지를 건네며 목표 기반 대화형 코칭으로 성장 리포트까지 제공합니다. Spring & React 풀스택 부트캠프 팀 프로젝트로 만든 가계부 앱을, 이후 AI 재무 코칭 기능을 더해 개인 프로젝트로 업그레이드했습니다.

---

## Overview
A nudge-based AI financial coaching ledger. It auto-recognizes expenses via receipt OCR, flags unusual spending with contextual nudges, and delivers goal-driven conversational coaching with growth reports. It began as a budget-ledger app built for the Spring & React full-stack bootcamp's team project, later upgraded into a personal project with AI financial coaching features.

## 문제 인식
- 기존 가계부 앱은 지출 기록·카테고리별 집계·다음 달 예측까지는 해주지만, "왜 늘었는지, 다음엔 어떻게 줄일지"에 대한 맥락 있는 조언은 없다.
- 예산 초과 알림은 이미 벌어진 일에 대한 사후 통보라 "늦은 알림"으로 느껴지고, 반복되면 무시하게 된다.

---

## Problem Recognition
- Existing budget apps track expenses, aggregate by category, and even forecast next month's spending — but offer no contextual advice on why spending spiked or how to reduce it.
- Over-budget alerts are after-the-fact notifications that feel "too late," and get ignored once they become routine.

## 솔루션
**기술 스택**: React, Spring Boot, PostgreSQL, Gemini AI

**핵심 기능**:
- 실시간 이상 넛지
- 대화형 목표 코칭
- 챌린지 성장 리포트

<a href="/images/projects/osori-poster-ko.png" target="_blank" rel="noopener noreferrer">
  <img src="/images/projects/osori-poster-ko.png" alt="OSORI 프로젝트 포스터 (클릭 시 원본 크기로 보기)">
</a>

---

## Solution
**Tech Stack**: React, Spring Boot, PostgreSQL, Gemini AI

**Key Features**:
- Real-Time Anomaly Nudges
- Conversational Goal Setting
- Challenge Growth Reports

<a href="/images/projects/osori-poster-en.png" target="_blank" rel="noopener noreferrer">
  <img src="/images/projects/osori-poster-en.png" alt="OSORI project poster (click to view full size)">
</a>

## 예측 모델 성능 검증
"다음 달 지출 예측"은 가중 선형회귀로 구현했지만, 예측값을 저장·비교하는 로그가 없어 실제 정확도를 알 수 없었습니다. 과거 거래 데이터를 재생해 그 시점의 모델이 무엇을 예측했을지 복원하는 백테스트를 직접 구현해 MAE·MAPE를 측정했습니다.

그 결과, 데이터가 적을 때 회귀가 이번 달 진행분(런레이트 추정치)의 작은 흔들림에도 다음 달 예측이 크게 출렁이는 문제를 확인했습니다(MAPE 57%). 원인을 분석해 "최근 N개월 평균" 방식으로 교체했고, 같은 백테스트 기준으로 MAPE를 15.6%까지 낮춘 뒤 실제 반영했습니다.

복잡한 모델이 항상 더 정확한 것은 아니며, 측정 없이는 어떤 모델이 나은지 알 수 없다는 것을 확인한 경험입니다.

---

## Prediction Model Performance Verification
The "next month's spending" forecast was originally built with weighted linear regression, but predictions were never logged against actual outcomes, so real-world accuracy was unknown. I built a backtesting script that replays historical transactions to reconstruct what the model would have predicted at past points in time, then measured MAE and MAPE.

The results showed that with limited data, the regression's forecast swung wildly whenever the current month's partial run-rate estimate shifted even slightly (MAPE 57%). After diagnosing the cause, I replaced it with a simple historical-average model — the same backtest showed MAPE dropping to 15.6% — and shipped the change.

A more complex model isn't always more accurate, and there's no way to know which one is better without measuring it.
