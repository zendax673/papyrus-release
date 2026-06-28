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

## [1.2.0] - 2026-06-01

### Removed

- **Research Atlas** surface and its supporting services
  (cartography, bridge-paper synthesis, atlas canvas) — pre-ship audit sweep
  collapsed the Discover step into Smart Collections + full-text search.

### Added

- **Per-field metadata provenance and conflict picker.** Every metadata field
  now records which source produced it (Crossref, OpenAlex, arXiv identifier
  extraction, XMP, manual edit). When sources disagree, the conflict picker lets you
  choose which value wins without losing the alternatives.
- **XMP metadata extraction** with merge policy. Papers carrying embedded XMP
  (publishers like Springer, Elsevier, IEEE) are recognised at import without
  a network round-trip.
- **Zotero / Better-BibTeX import.** Brace-balanced BibTeX field scanner
  understands nested braces and Zotero-style note fields. Zotero `keywords`
  become tags, `groups` become folders, the `note` field is extracted, and
  `langid` / `language` map to BCP-47 on the paper record. Linked PDF
  attachments can be brought into the library during import.
- **Project writing workflows.** Projects now include an Evidence Board,
  project-specific paper roles, synthesis search, Theme Map, manuscript
  preflight checks, project note templates, and lightweight note history.
- **Evidence capture and reuse.** Claims, themes, evidence quotes, pages,
  interpretations, section use, citation keys, and confidence can be captured
  at the project level and copied out as Markdown, paragraphs with citations,
  blockquotes, or evidence matrices.
- **Citation and export tools for writing.** Project export now supports CSL
  JSON, BibTeX, Markdown, PDF bundles, export reports, duplicate citekey checks,
  metadata-gap reporting, and quick copy actions for Pandoc and LaTeX cite
  commands.
- **WebDAV restore points.** Successful WebDAV syncs keep dated restore points
  so an earlier synced copy can be inspected and staged for safe restore on the
  next launch.
- **Pluggable resolver registry.** Metadata sources are now data-driven, so
  additional resolvers can be added without touching call sites.
- Public release documentation set:
  [PRIVACY.md](PRIVACY.md), [SUPPORT.md](SUPPORT.md), [FAQ.md](FAQ.md).
- MIT license file to match the repository README.
- **HIG & accessibility compliance pass (v2).** Sidebar selection inherits
  the system accent. Custom buttons honor `isEnabled` and draw focus rings.
  All custom motion respects Reduce Motion. Type scales with Larger Text via
  `@ScaledMetric` while preserving the designed three-pane hierarchy.
  Subscription sheet discloses auto-renewal, Terms, and Privacy.
  Option/Shift-drag are discoverable from keyboard alone. Shortcut recorder
  surfaces an explicit Replace flow on binding conflicts.

### Fixed

- Avoided selection cleanup paths that could touch deleted `Paper` models
  after permanent delete operations.
- Switched PDF opening to file URL loading instead of reading whole documents
  into memory first.
- Balanced security-scoped file access for linked PDFs across reader, share,
  export, and Finder-reveal flows.
- Restored default TLS certificate validation for WebDAV sync requests.
- Improved Settings and Help copy for sync setup, restore behavior, project
  writing tools, and diagnostics.
- Fixed layout issues in Trash, Settings, Help, and Project views where rows,
  controls, or headers could overflow at narrow widths.
- Restored visible reading-progress percentages in library and project views,
  including completed papers and imported records without a saved page number.
- Reduced runtime overhead in library filtering, full-text indexing, PDF
  loading, and diagnostic surfaces.
