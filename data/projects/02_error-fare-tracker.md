---
title:
  ko: "AI 기반 기업 OJT 문제 생성·채점 시스템"
  en: "AI-Powered Corporate OJT Question Generation & Grading System"
description:
  ko: "제조업 신입사원 OJT 문제를 AI로 자동 생성·채점하는 시스템"
  en: "An AI system that auto-generates and grades OJT questions for manufacturing new hires"
date: "2026-06-01"
status: "완료"
duration: "2026.06 ~ 2026.07"
thumbnail: "/images/projects/ojt-system-thumb.png"
tech_stack: ["React", "FastAPI", "Claude API", "Google Sheets API"]
links:
  - title:
      ko: "관련 활동: 아산 AX 글로벌 인재양성 프로그램"
      en: "Related Activity: ASAN AX Global Talent Development Program"
    type: "link"
    url: "/#05_asan-ax-global-founders"
---

## 개요
제조업 현장에 투입되는 신입사원의 OJT 평가를 위한 AI 기반 문제 생성·채점 시스템입니다. 팀마다 업무 특성이 다른데도 모든 팀이 동일한 문제로 시험을 치러 난이도 편차가 크고, 그 결과가 그대로 인사평가에 반영되던 문제를 해결하기 위해 아산 AX 글로벌 인재양성 프로그램에서 실제 기업 과제로 개발했습니다.

---

## Overview
An AI-based system that generates and grades OJT (on-the-job training) questions for new hires on a manufacturing floor. Built as a real-company project through the ASAN AX Global Talent Development Program to fix a problem where every team sat the exact same exam despite very different day-to-day work — creating uneven difficulty that fed directly into employee performance reviews.

## 문제 인식
- 팀별 업무 특성이 다른데도 모든 팀이 동일한 문제로 시험을 치러, 현장 이해도를 제대로 반영하지 못함
- 문제 난이도가 들쭉날쭉해 시험 결과가 인사평가 점수를 왜곡해도, 담당자가 이를 수동으로 조정할 방법이 없음
- 채점 이후 오답·취약 항목 분석과 재교육 연계가 미흡해, 교육 효과를 다음 사이클에 반영하기 어려움

---

## Problem Recognition
- Every team sat the same exam regardless of their differing day-to-day responsibilities, so questions didn't reflect real on-the-job understanding
- Difficulty varied inconsistently across questions, skewing exam results that fed directly into HR performance reviews — with no manual way for administrators to correct it
- After grading, there was no structured link between wrong answers/weak areas and follow-up retraining, making it hard to carry lessons into the next training cycle

## 솔루션
**기술 스택**: React, FastAPI, Claude API, Google Sheets API

**핵심 기능**:
- AI 문제 생성·저장 및 시험 생성 — 업로드된 교육자료를 기반으로 난이도별 문제를 자동 생성하고, 관리자 검토·승인을 거쳐 문제은행에 저장, 시험 출제 시 바로 활용
- 자동 채점 및 결과 분석 — 시험 종료 후 자동 채점, 응시자별·전체 통계 리포트 제공
- 관리자 대시보드 — 문제·시험·결과·시스템 관리를 한 화면에서 처리하는 워크플로우 기반 대시보드

---

## Solution
**Tech Stack**: React, FastAPI, Claude API, Google Sheets API

**Key Features**:
- AI question generation & exam building — AI auto-generates difficulty-tagged questions from uploaded training materials; once an admin reviews and approves them, they're saved to a question bank and pulled directly into new exams
- Automated grading & result analysis — exams auto-grade on completion, producing both aggregate and per-trainee statistical reports
- Admin dashboard — a workflow-based dashboard covering question management, exam management, result management, and system management in one place
