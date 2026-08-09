# Changelog

All notable changes to Papyrus should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project follows semantic versioning when tagged releases begin.

## [Unreleased]

## [1.6.0] - 2026-08-08

### Added

- **Notebooks.** Gather notes from across your library onto themed shelves — a
  topic, a chapter you're drafting, a reading group. Filing a note copies
  nothing and moves nothing: it still belongs to its paper, still says which
  paper that is, and one click or tap takes you there and back. A note can sit
  on several shelves at once, so "Optics" and "Chapter 3" never have to fight
  over it.
- **Filling and working a shelf.** Add Notes… lists every note in your library
  with a search field and a not-in-a-notebook filter, so filling a new notebook
  from years of existing notes takes moments rather than a note-by-note pass.
  Search a shelf by a note's text or by the paper it was written on, and order
  it four ways: recently edited, grouped by paper, by title, or oldest paper
  first — which reads your own notes forward through the literature. Select
  several notes to move, unfile, or trash them together; grouped by paper, each
  paper's heading handles its notes as a unit.
- **All Notes.** The first row of the Notebooks section reads every note in
  your library, filed or not, with the same search, orders, and bulk actions a
  shelf has.
- **Export or link a shelf.** Export turns what you're looking at into one
  Markdown document, matching the current order and search. Copy Link gives a
  `papyrus://` address that reopens the notebook.
- **A Reading card on each paper.** The detail pane now shows the page you
  stopped on, how far into the PDF you are, and every page you bookmarked while
  reading. Page bookmarks previously lived four steps away in the reader's
  sidebar, invisible to anyone who never opened that tab.
- **Link controls for papers and notebooks.** Each has its own Link control
  with Copy Link and Copy Markdown Link, so Hookmark and other link managers
  can address them directly instead of the link being filed away beside BibTeX
  and RIS.
- **A large round of iPhone catch-up.** Flags now work on the phone — set one
  from the quick-state strip, filter by Flagged, and read each flag by its
  shape as well as its color. Notebooks can be created, renamed, and deleted
  there; papers can be moved to Trash, refreshed, and edited; and folders and
  projects can be created without reaching for an iPad or Mac.

### Changed

- **Smoother Apple Pencil ink on iPad.** Scrolling an inked PDF does far less
  work per page — Papyrus no longer re-reads and re-saves ink for pages you
  only scrolled past.
- **Room to breathe on iPad.** The notebook header no longer crams four
  spelled-out controls into a split-view column; the PDF row offers the one
  action the paper's state actually calls for instead of wrapping "Replace PDF"
  onto two lines; and the Library title no longer drags down when you overscroll
  the paper list.
- **Deleting a notebook is undoable.** Notebooks move to the Trash rather than
  vanishing, and the Trash says how many notes are still filed on each. The
  notes are never deleted with the shelf.
- More of the app is translated.

### Fixed

- **Notes and highlights no longer come adrift from their paper during sync.**
  A syncing bug could disconnect a note or a highlight from the paper it
  belonged to, on every device at once, with no way to reattach it. Notes that
  came adrift before this release keep their text, stay editable, and now read
  "No linked paper" rather than going missing.
- Moving a note to Trash now updates the Trash count.
- Add Notes, Add Papers, and the other editing panels are no longer clipped on
  both edges in a narrow window.
- A notebook's badge now shows that it counts notes, not papers.

## [1.5.5] - 2026-08-04

### Added

- **Link to a paper from anywhere.** Papers have a `papyrus://` address and a
  Copy Link command, so Hookmark, Obsidian, or a plain text plan can point at
  the exact paper — and at the page you were on.
- **Smart Collections match more.** Text Match, Tag Filter, and Document Type
  each take several values, and for Text Match and Tag Filter you choose
  whether a paper must match Any of them or All of them.

### Changed

- **Save what you're signed in to read.** The Safari extension captures the PDF
  from inside your browser session, so a paper behind a publisher sign-in you
  have access to saves with the Papyrus button — not just open-access files.
- **See what a metadata refresh changed.** After refreshing metadata across the
  library, the summary lists which papers were updated and which fields —
  title, authors, year, or abstract — changed.
- **Each flag color now has its own shape.** All seven flags previously drew
  the same icon and differed only in hue, so color was the only thing telling
  them apart. Each color now carries a distinct symbol — flag, triangle,
  drop, square, hexagon, diamond, circle — in the paper row, the flag menu,
  the Smart Collection picker, and filter chips, so flags stay readable for
  color-blind readers and in grayscale.
- **The detail pane shows where a paper lives.** Folder and project membership
  are visible on the paper itself, and notes link back to the paper they were
  written on.

### Fixed

- Refreshing metadata is idempotent: a second pass over unchanged papers no
  longer reports them as updated.
- Tag removal buttons in the inspector are reachable, and the Add pills share
  one width.

## [1.5.3] - 2026-07-19

### Added

- **Flags are a real organizing dimension.** Filter the library by flag,
  build Smart Collections from a flag rule, and sort by flag (unflagged
  papers last). Each of the seven colors can be given your own name — "To
  Read", "Needs Reply" — and that name follows the color through the flag
  menu, filter tokens, and Smart Collection summaries.

### Changed

- **Sharper metadata on import.** Author lists, years, and titles are read
  far more accurately, especially on Springer, IEEE, and magazine-style
  PDFs: bylines that wrap across several lines are captured in full instead
  of stopping halfway, journal boilerplate no longer lands in the author
  field, and a year mentioned in prose ("published in December 1919") is no
  longer mistaken for the publication year.
- **A calmer Projects workspace.** Papers, Evidence, and Draft each carry
  their own accent so the current mode is always obvious. Captured evidence
  now reads as a typeset note — claim, quote, and interpretation laid out
  for reading — with the editing controls one click or tap away instead of
  permanently on screen. Explanatory copy steps aside once a section holds
  real content, the manual-evidence form stays folded until you open it,
  and note previews show your prose instead of raw Markdown.

### Fixed

- Sidebar section arrows align with the badge column again on iPad.
- The selection checkmark on the lighter flag swatches is legible in both
  light and dark mode.
- VoiceOver reads your custom flag names rather than the raw color, and the
  shortcut-validation dismiss button is now labeled.

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
