---
title:
  ko: "에러 항공권 추적기 (자리 채워주세요)"
  en: "Error Fare Tracker (placeholder — please fill in)"
description:
  ko: "항공권 오류 운임(Error Fare)을 자동으로 감지하고 알림을 보내는 서비스"
  en: "A service that automatically detects airline error fares and sends alerts"
date: "2024-06-01"
status: "완료"
duration: "2024.06 ~ 2024.09"
thumbnail: "/images/projects/error-fare-thumb.png"
tech_stack: ["Python", "Node.js", "PostgreSQL"]
links: []
---

## 개요
> **TODO**: 실제 프로젝트 내용으로 이 항목을 채워주세요. 아래는 파일명을 근거로 작성된 예시 초안입니다.

항공권 가격 데이터를 주기적으로 수집해 정상 운임보다 비정상적으로 낮은 오류 운임을 탐지하고 사용자에게 알려주는 프로젝트입니다.

---

## Overview
> **TODO**: Please replace this with the actual project details. The content below is a draft placeholder inferred from the file name.

A project that periodically collects flight fare data to detect abnormally low "error fares" and notifies users.

## 문제 인식
- 항공권 오류 운임은 짧은 시간 내 사라지므로 빠른 감지가 필요함
- 수동 모니터링의 한계

---

## Problem Recognition
- Error fares disappear quickly, so fast detection is required
- Limitations of manual monitoring

## 솔루션
**기술 스택**: Python, Node.js, PostgreSQL

**핵심 기능**:
- 항공권 가격 주기적 크롤링/수집
- 이상치 탐지 로직으로 오류 운임 필터링
- 알림 발송

---

## Solution
**Tech Stack**: Python, Node.js, PostgreSQL

**Key Features**:
- Periodic crawling/collection of flight fare data
- Outlier detection logic to filter error fares
- Alert notifications
