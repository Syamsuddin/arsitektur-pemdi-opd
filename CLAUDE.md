# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **Claude Skill package** named `pemdi-arsitektur-opd`, not an application. It contains authored instructions and reference data (all Markdown + JSON) that teach Claude to draft SPBE/Pemdi enterprise-architecture documents for Indonesian local-government agencies (OPD). There is **no code to build, lint, or test** and no git repository here. Work in this repo is editing prose and reference tables, not writing software.

The whole package is written in **Bahasa Indonesia**. Match that language and its formal governmental register when editing.

The deliverable is packaged as a single `pemdi-arsitektur-opd.skill` file that users upload into Claude. Editing here means editing the source; there is no compile step in this working tree.

## Layout and what each file drives

- `SKILL.md` — the entry point. YAML frontmatter (`name`, `description`) controls when the skill auto-activates; the body defines the four work modes and their step-by-step procedures. This is the file that is loaded first and always.
- `references/*.md` — nine reference documents, loaded **selectively and on demand** (never all at once — see below). Each maps to a specific step in a mode.
- `assets/dosir-template.json` — the schema/skeleton for the "Dosir", the skill's cross-session working memory.
- `README.md` — human-facing overview and full changelog. Keep it in sync when behavior changes.

## Core architecture: four modes over a shared automatic prelude

Every user request routes into exactly one mode (`SKILL.md`). PEMETAAN is the safe default when ambiguous.

- **PEMETAAN** — map one OPD's *As-is* architecture across the six SPBE domains, from scratch.
- **SINTESIS** — roll several already-mapped OPDs up into a Pemda-level picture (integration catalog, sensitive-data map). Operates at a higher level; must not re-list per-OPD domain detail.
- **KOREKSI** — revise an existing document when new facts appear, logging the correction transparently rather than silently overwriting.
- **PERENCANAAN** — build *To-be* architecture and a Gap Catalog on top of an existing As-is. Requires As-is to already exist.

Before any mode, an **automatic prelude** runs silently: determine the Pemda name, then look for an existing `dosir.json` in `/mnt/user-data/uploads` and read it (or start a fresh one from the template). National references are static and read only when a step needs them.

### The six domains (PEMETAAN Step 3)

Proses Bisnis → Data & Informasi → Layanan SPBE → Aplikasi SPBE → Infrastruktur SPBE → Keamanan SPBE. Two structural rules that are easy to get wrong:
- **Data is derived systematically from Business Process via SIPOC**, not filled in freely (Supplier = Produsen Data, Customer/owner = Wali Data).
- Every domain fills the **official SIA-SPBE metadata field names** (from `references/metadata-sia-spbe.md`) so output is portal-ready, not just narrative prose.

### Dinas vs non-Dinas is the first fork

PEMETAAN Step 1.0 classifies the OPD before anything else, because the two types use different derivation paths:
- **Dinas** (executes concurrent affairs) → `matriks-urusan-uu23-2014.md` → `matriks-proses-bisnis.md`.
- **non-Dinas** (Badan, Inspektorat, Kecamatan, Sekretariat, Kesbangpol) → **skip the affairs matrix entirely**, derive from `tipe-opd-non-dinas.md`.

### Dosir: the cross-session memory contract

There is **no automatic persistence** — the working directory resets between sessions. The Dosir uses an **upload-again pattern**: at the end of a session the skill presents `dosir.json` as a file to save; at the start of the next session the user re-uploads it. The Dosir is deliberately **kept lean** — cross-OPD status only (`opd_terpetakan`, `titik_integrasi`, `fakta_tervalidasi`, `isi_terbuka`, `prinsip_batasi_digitalisasi`, `koreksi_metodologis_log`, and the two PERENCANAAN fields). Full six-domain detail lives in each OPD's own architecture document and must never be duplicated into the Dosir.

## Authoring conventions that must be preserved

These are the load-bearing invariants of the skill's design. Editing prose here without honoring them silently breaks the product.

- **Anti-fabrication discipline.** Never invent regulation numbers, application names, or metadata enumeration values. Unknown factual fields are marked `[ISI: ...]`, never guessed. In PERENCANAAN, unconfirmed skill recommendations are marked `[USULAN CLAUDE, belum dikonfirmasi: ...]` — distinct from `[ISI:]` and never locked as final decisions.
- **No em dashes or en dashes** in output prose (stated as a hard rule in SKILL.md's "Disiplin Wajib"). Use plain hyphens or restructure.
- **Legal legitimacy beats generic patterns.** For Dinas, the UU 23/2014 concurrent-affairs matrix wins over experience-based generic patterns; when they conflict, record the difference as a finding rather than silently choosing.
- **Batasi Digitalisasi.** For sensitive data (intelligence, victims, mental health, biometrics) the default recommendation is to *restrict* digital access, not expand it. This must be stated explicitly in Domain 6 with a specific reason.
- **Selective reading.** References are large; a single OPD mapping reads only the relevant slice of the affairs/process matrices (via grep/range), never all 32 affairs at once. Preserve this guidance when editing SKILL.md's reference section.
- **Pemda-agnostic references.** Reference files must contain no data specific to one kabupaten/kota — the skill works for any Indonesian local government. Keep examples illustrative only.
- **Transparent corrections.** Mistakes are corrected in-place with an explicit note and a `koreksi_metodologis_log` entry, not deleted.

## When you change behavior

Keep three places consistent: the procedure in `SKILL.md`, the "Versi dan Changelog" section at the bottom of `SKILL.md`, and the "Riwayat Versi" section in `README.md`. The current version is **v1.3.0**. If a reference file's role changes, update both its bullet in `SKILL.md`'s "Referensi" list and the layout tree in `README.md`.
