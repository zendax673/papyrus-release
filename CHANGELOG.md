# Changelog

All notable changes to Papyrus should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project follows semantic versioning when tagged releases begin.

## [Unreleased]

No unreleased changes documented yet.

## [1.5.2] - 2026-07-13

Papyrus is now free to download and use — every feature included, no
in-app purchases, no subscription.

### Added

- **Papyrus for iPhone.** Read, browse, capture, and file your papers with a
  companion designed for one hand — including Safari import, the reader, and
  light per-paper filing.
- **References & Related in the reader.** A References tab looks up the open
  paper's reference list and related work (by DOI) and adds any of them to
  your library with one tap; tap a row to open it on doi.org.
- **Watched folder (Mac).** Pick a folder such as Downloads and new PDFs
  import automatically from then on.
- **Live BibTeX export (Mac).** Papyrus keeps a `papyrus-library.bib` file
  continuously updated for LaTeX and Overleaf workflows.
- **Colored flags.** Seven colored flags for quick triage alongside star
  ratings, shown in the paper row and synced across devices.
- **Paper Highlights notebook.** Every highlight across a project gathered in
  one place — tap one to jump to that exact spot in the PDF, or copy the set
  as Markdown.
- **Review duplicates.** Settings → Advanced finds look-alike papers (same
  PDF, DOI, or title and size) and merges each set after confirmation,
  combining tags, folders, projects, notes, and highlights.

### Changed

- **Importing asks once.** One sheet confirms destination folder, tags,
  projects, and link-vs-copy; imports land in the folder or project you're
  viewing, and multiple PDFs can be dropped onto a sidebar folder at once.
- **Sidebar polish.** Folders, Smart Collections, Projects, and Tags collapse
  with one uniform header; clearer disclosure arrows and visible row
  dividers on Mac.
- **Papyrus for Mac now requires Apple Silicon** (M1 or later); the app is
  smaller and faster for it.

### Fixed

- BibTeX and RIS files import cleanly — including libraries exported from
  Mendeley or Zotero — and export as proper `.bib` / `.ris` files instead of
  plain text.

## [1.4.1] - 2026-07-02

### Added

- **Safari import, upgraded.** The popup now shows the captured paper (title,
  authors, year, venue, DOI / arXiv) as soon as the page is read, says up
  front whether the PDF will download or a citation-only record will be
  created, mirrors Papyrus's live import progress, and offers Open Papyrus
  immediately. Closing the popup is always safe — a queued import finishes in
  Papyrus either way.
- **Organize right in the Safari popup.** Optional folder, tag, and project
  pickers (plus a download-PDF toggle) appear under the captured paper on Mac
  and iPad, so a paper can land organized. On iPad this is the first way to
  pick destinations during a Safari import.
- **Save Link to Papyrus.** Right-click (Mac) or long-press (iPad) any PDF,
  DOI, or arXiv link and save the paper without opening it. The toolbar badge
  confirms the result.
- An optional keyboard shortcut (Option-Shift-P) opens the import popup on
  macOS, and Safari import setup is now easy to find in-app: a
  Settings → General → Import from Safari card and a Help → Import Papers →
  Save from Safari article cover both platforms.

### Changed

- **The detail pane leads with the abstract**, so deciding whether a paper is
  worth reading no longer means scrolling past tall note previews. Header
  actions are tidier, and sharing a citation now names the style it will use.
- **Library rows dropped the unlabeled status dots.** Paper states now appear
  as labeled, tooltipped chips under the title (Needs metadata, Conflict,
  Unread, Read Later, PDF, Favorite). The Conflict chip jumps straight to the
  Review Metadata Sources card, and the Needs-metadata chip opens the
  metadata editor — each state is also the shortcut to fixing it.
- **Settings polish.** Clearer VoiceOver labels, consistent switch and button
  styling, a sensibly sized Settings window on Mac, an iPad row showing how
  much space your PDFs use, and status notices that no longer jump the layout.
- Help and onboarding now match the shipping app: iCloud Sync leads the sync
  story, Safari import is documented on both platforms, and outdated claims
  were removed.

### Fixed

- **iCloud Sync no longer resurrects deleted items.** Bulk deletes on one
  device could bounce back through another device's delete confirmation and
  reappear; a single Apply now settles it, and choosing Keep restores the
  kept items on every device.
- **The Annotated collection counts only real annotations.** Papers without
  actual ink or highlights no longer appear in — or inflate the badge of —
  the Annotated Smart Collection.
- The Conflict chip now responds even when the conflict was recorded on
  another device, the Safari popup no longer reports a finished import as
  still running (and Retry actually retries), Open Papyrus opens the app
  reliably on iPad, and collapsing a long author list no longer strands the
  iPad detail pane on blank space.

## [1.4.0] - 2026-07-01

### Added

- **Safari paper import.** A bundled Safari Web Extension captures the paper
  on the current tab — and its PDF when one is available — and sends it to
  Papyrus. Available on Mac and iPad.

### Changed

- Improved optional iCloud Sync reliability and WebDAV restore behavior.

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

- **Per-field metadata provenance and conflict picker.** Every metadata field
  now records which source produced it (Crossref, OpenAlex, arXiv identifier
  extraction, XMP, manual edit). When sources disagree, the conflict picker lets you
  choose which value wins without losing the alternatives.
- **XMP metadata extraction** with merge policy. Papers carrying embedded XMP
  (publishers like Springer, Elsevier, IEEE) are recognised at import without
  a network round-trip.
- **BibTeX import extensions.** Brace-balanced BibTeX field scanner
  understands nested braces and packed note fields. `keywords` become tags,
  `groups` become folders, the `note` field is extracted, and `langid` /
  `language` map to BCP-47 on the paper record. Linked PDF attachments can be
  brought into the library during import.
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
  [Privacy](https://zendax673.github.io/papyrus-release/privacy.html),
  [Support](https://zendax673.github.io/papyrus-release/support.html), and
  [FAQ](FAQ.md).
- MIT license file to match the repository README.
- **HIG & accessibility compliance pass (v2).** Sidebar selection inherits
  the system accent. Custom buttons honor `isEnabled` and draw focus rings.
  All custom motion respects Reduce Motion. Type scales with Larger Text via
  `@ScaledMetric` while preserving the designed three-pane hierarchy.
  Subscription sheet discloses auto-renewal, Terms, and Privacy.
  Option/Shift-drag are discoverable from keyboard alone. Shortcut recorder
  surfaces an explicit Replace flow on binding conflicts.

### Removed

- **Research Atlas** surface and its supporting services
  (cartography, bridge-paper synthesis, atlas canvas) — pre-ship audit sweep
  collapsed the Discover step into Smart Collections + full-text search.

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
