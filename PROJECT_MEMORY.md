# Project Memory & Status Scratchpad
**Last Updated:** December 5, 2024

## 🚀 Project Overview
**Jax Sod Website** is a Next.js application for a sod installation company in Jacksonville, FL.
- **Tech Stack:** Next.js 14, TypeScript, Tailwind CSS.
- **Data Source:** `data/articles.tsx` (Local array of objects, no database yet).

## 🧠 Critical Context (Read Me First)
- **Repo State:** The project was recently recovered from a crash. We have manually restored features like the Sod Calculator and Article Library.
- **Server:** Runs on port 3002 (`npm run dev -- -p 3002`).

## 🛠 Recent Accomplishments (QA Report 1)
1.  **Fixed Read Time Logic:**
    *   *Problem:* Read times were hardcoded (e.g., "15 min read") and inaccurate for short- **Content Expansion:** Rewrote "Irrigation Rules" (Step 196), "Shade Trees" (Step 229), and "Landscape Design" (Step 232) to matching word counts.
- **Dynamic Read Time:** Implemented accurate calculation `Math.ceil(wordCount / 200)`.
2.  **Content Audit:**
    *   Rewrote **"The Golden Rules of Irrigation"** (`irrigation-golden-rules`) to be ~1,200 words to improve quality and justify read time.
    *   Updated word counts for other short articles to ensure accurate metadata.
3.  **Fixed Broken Assets:**
    *   Generated and linked `public/irrigation-sprinkler.png` for the irrigation article.

## 📂 Key File Structure
- `app/articles/`: Main article listing and individual slug pages.
- `components/ArticleSearch.tsx`: Handles search, filtering, and state management for articles.
- `components/SodCalculator.tsx`: functional sod area calculator.
- `data/articles.tsx`: **Source of Truth** for all article content and metadata.

## 🚨 Operational Protocols (IMPORTANT)
1.  **ALWAYS PUSH TO GITHUB:** The user expects all changes to be pushed to `origin main` immediately after completion. Do not wait for a specific prompt.
    *   Command: `git add . && git commit -m "feat: description" && git push`
2.  **Update This File:** Keep this `PROJECT_MEMORY.md` up to date with major changes so the next agent knows what happened.

## ⏭ Next Steps
- Await **QA Report 2**.
- Address any further content expansions or styling tweaks requested.
