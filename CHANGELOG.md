# Changelog

All notable changes to Papyrus Papers should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project follows semantic versioning when tagged releases begin.

## [Unreleased]

### Removed

- **Research Atlas** surface and its supporting services
  (cartography, bridge-paper synthesis, atlas canvas) — pre-ship audit sweep
  collapsed the Discover step into Smart Collections + full-text search.

### Added

- **Per-field metadata provenance and conflict picker.** Every metadata field
  now records which source produced it (Crossref, arXiv, Semantic Scholar,
  XMP, manual edit). When sources disagree, the conflict picker lets you
  choose which value wins without losing the alternatives.
- **XMP metadata extraction** with merge policy. Papers carrying embedded XMP
  (publishers like Springer, Elsevier, IEEE) are recognised at import without
  a network round-trip.
- **Zotero / Better-BibTeX import.** Brace-balanced BibTeX field scanner
  understands nested braces and Zotero-style note fields. Zotero `keywords`
  become tags, `groups` become folders, the `note` field is extracted, and
  `langid` / `language` map to BCP-47 on the paper record.
- **Pluggable resolver registry.** Metadata sources are now data-driven, so
  additional resolvers can be added without touching call sites.
- Public release documentation set:
  [PRIVACY.md](PRIVACY.md), [SUPPORT.md](SUPPORT.md), [FAQ.md](FAQ.md).
- MIT license file to match the repository README.
- **HIG & accessibility compliance pass (v2).** Sidebar selection inherits
  the system accent. Custom buttons honor `isEnabled` and draw focus rings.
  All custom motion respects Reduce Motion. Type scales with Larger Text via
  `@ScaledMetric` while preserving the designed three-pane hierarchy.
  Purchase sheet discloses the 30-day trial, lifetime unlock, Terms, and
  Privacy.
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
