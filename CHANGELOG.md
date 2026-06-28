# Changelog

All notable changes to Papyrus should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project follows semantic versioning when tagged releases begin.

## [Unreleased]

No unreleased changes documented yet.

## [1.3.3] - 2026-06-28

### Added

- **iCloud Sync.** Optional iCloud Sync keeps the library current across Mac and
  iPad devices signed in to the same iCloud account.

### Changed

- Public website, privacy, terms, support, and FAQ copy now describe both
  iCloud Sync and WebDAV sync instead of WebDAV-only sync.

## [1.2.1] - 2026-06-05

### Added

- **Citation export.** Copy or export formatted citations for selected papers
  directly from the library.

### Changed

- Now runs on macOS 14.0 Sonoma and later (previously macOS 15 Sequoia).
- Clearer confirmations before deleting projects, tags, and collections, plus a
  more balanced first-run experience and a more consistent interface throughout.

### Fixed

- More accurate titles when importing open-access PDFs and titles that end in a
  version number (for example, "Covid-19" or "GPT-4").
- Correct in-page navigation for table-of-contents and footnote links in note
  previews.
- Broad metadata-extraction and import-stability improvements.

## [1.2.0] - 2026-06-01

### Added

- **Project writing workflows.** Projects now support project-specific paper
  roles, manuscript note templates, scoped synthesis search, theme mapping,
  and manuscript preflight checks.
- **Evidence Board.** Capture claims, themes, papers, quotes, page numbers,
  interpretations, manuscript sections, citation keys, and confidence in one
  project-level board.
- **Citation and export upgrades.** Project export now includes BibTeX, RIS,
  CSL JSON, Markdown, cite commands, evidence, PDFs when available, and an
  export report for missing PDFs, duplicate citekeys, missing metadata, and
  skipped files.
- **WebDAV restore points.** Successful syncs keep dated restore points so a
  remote library copy can be inspected and restored safely.
- **BibTeX / RIS import.** Linked PDFs, keywords, groups, notes, language
  fields, and nested BibTeX fields are imported more reliably.

### Changed

- Public website and support copy now focus on the real writing workflow:
  importing papers, reading PDFs, collecting evidence, preflighting citations,
  and exporting manuscript-ready material.
- WebDAV setup guidance now treats Synology as one example, not a requirement.
- Reading progress is visible again in library and project contexts.

### Fixed

- Fixed Settings and Help layout/copy issues found during the release audit.
- Fixed layout polish issues around Trash, project headers, and public settings
  descriptions.
- Reduced runtime overhead in library badge recompute and PDF/title extraction
  paths.
