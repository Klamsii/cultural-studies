# AI Brain Operating System Rules & Standards

This document establishes the binding operational rules for the Cultural Studies repository.

---

## 1. 100% COMPLETE COVERAGE OF COURSE MATERIALS
- Ensure **100% exhaustive coverage of ALL information** from every source provided by the user (uploaded course PDFs `media__1785186667074.pdf`, `media__1785186755895.pdf`, official AITU LMS lecture videos 1.1–2.3, assigned video links, and LMS tests).
- NOT A SINGLE DETAIL, QUOTE, EXPERIMENT, SCHOLAR, OR CASE STUDY MAY BE OMITTED OR CONDENSED.

## 2. MAXIMUM CLARITY & EXPLANATORY PROSE (NO SHORT BULLET LISTS)
- Write in crystal-clear, highly readable, textbook-grade prose paragraphs.
- Avoid dry, ungrounded bullet keyword lists (e.g. `• Медиум: ...`, `• Механизм: ...`). Explain *what* concepts mean, *why* they function as they do, and *how* they apply.

## 3. STRICT WEBSITE MANDATE: QUIZ & TEST PLATFORM ONLY
- **The web application in `website/` must contain ONLY interactive test questions, quiz options, instant answer verification, score counters, master textbook reader, and oral exam defense practice questions.**
- DO NOT place long text presentations, filler slides, or extraneous notes on the website.

## 4. STRICT RULE FOR USER TEST QUIZZES
- **When the user sends test questions in the chat:**
  1. **DO NOT edit, modify, or rewrite any files or folders in the repository.**
  2. Simply provide the clear, direct, correct answers to each test question directly in the chat.

## 5. Multi-lingual Structure
- Every week directory (`Week-1/`, `Week-2/`) contains:
  - `Main_RU.md` (Exhaustive master guide in Russian)
  - `Main_EN.md` (Exhaustive master guide in English)
  - `README.md` (Index dashboard)
  - `ru/` (Individual topic notes in Russian)
  - `en/` (Individual topic notes in English)

## 6. MANDATORY RULE: RE-AUDIT ENTIRE PROJECT ON NEW RULE ADDITION
- **WHENEVER A NEW RULE OR DIRECTIVE IS ADDED OR MODIFIED:**
  - The AI assistant MUST IMMEDIATELY RE-CHECK AND RE-AUDIT THE ENTIRE PROJECT FROM SCRATCH against all rules.
  - Verify 100% compliance across all repository files (`Week-1/`, `Week-2/`, `website/`, `js/app.js`, `css/styles.css`, `index.html`, `Ai_Brain/`).
  - Record the comprehensive audit findings in `Ai_Brain/audit.md`.

## 7. AI ASSISTANT RESPONSE RULES: ALWAYS DIRECT ENGLISH & NO PREAMBLES
- The AI Exam Assistant MUST ALWAYS respond 100% in clear, articulate academic ENGLISH regardless of the language of the prompt.
- NEVER include preambles, meta-references, or filler intro clauses (e.g. "According to our materials...").
- START IMMEDIATELY with the direct 3-4 sentence oral exam answer.

## 8. MOBILE-FIRST RESPONSIVE UI REQUIREMENT
- All web interfaces must feature mobile-first responsive styling, full-width touch-friendly controls, and iOS/Android bottom-sheet AI drawers on smartphones.

## 9. MANDATORY 100% BILINGUAL SYNCHRONIZATION RULE (RU <-> EN PARITY)
- **ALL INFORMATION IN THE ENTIRE REPOSITORY AND WEB PORTAL MUST BE 100% SYNCHRONIZED BETWEEN RUSSIAN AND ENGLISH.**
- Whatever concept, scholar, case study, lecture note, or test question exists in Russian MUST exist in English in equal depth, and vice versa.
- The two languages must fully complement each other with zero gaps, omissions, or asymmetric information.

## 10. MANDATORY NOTE-WRITING STANDARD (`Ai_Brain/note_standard.md`)
- **Every study note created or edited in this repository MUST comply with `Ai_Brain/note_standard.md`.**
- That document is binding and defines: the mandatory 3-layer depth model (60-second summary → full explanation → deep details), the fixed block structure of every note file, prose and terminology rules, self-check blocks, the forbidden anti-patterns (§12), and the mandatory RU↔EN parity verification procedure (§13).
- The AI MUST run the §13 parity check and the §14 checklist **before** reporting any note as finished, and must state the result of that check explicitly.
- Rule #10 applies to `Week-N/ru/*.md`, `Week-N/en/*.md`, `Main_RU.md`, `Main_EN.md`, and to the textbook chapters embedded in `website/js/app.js`.

## 11. WEB TEXTBOOK CHAPTER STANDARD & MANDATORY FINAL VERIFICATION
- **No stub chapters.** Every content chapter in `fullBookDatabase` must contain **at least 1500 characters** of HTML per language, with an RU↔EN size gap of **no more than 20%** (`note_standard.md` §16.1). A chapter that states a heading and one summary line is a defect, not a chapter.
- Chapter structure, the format of test-key chapters (question + answer + explanation) and oral-defense chapters (3–4 full sentences per ticket) are defined in `note_standard.md` §16.2–16.3.
- **Single source of truth:** the textbook lives ONLY in `website/js/app.js`. Duplicate copies of the database in other folders are forbidden. `index.html` must load exactly one `<script>` and one `<link>` — two scripts declaring `const fullBookDatabase` crash the page with a redeclaration error while still *appearing* to work. Bump the `?v=` cache buster on every content change or GitHub Pages will serve the stale file.
- **Mandatory final verification (`note_standard.md` §17).** Before reporting any work as finished the AI MUST run all four checks (JS syntax, chapter size/parity, `X (X)` bracket test, RU/EN note structure parity) and **quote their actual output in the reply**. Writing "100% COMPLIANT", "0 errors" or "PASSED" without that output is a violation of this rule. An honest report listing open defects is always preferred over a false report of success.
