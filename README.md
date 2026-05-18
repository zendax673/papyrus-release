<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/">
    <img src="https://zendax673.github.io/papyrus-release/assets/icon.svg" width="128" height="128" alt="Papyrus Papers">
  </a>
</p>

<h1 align="center">Papyrus Papers</h1>

<p align="center">
  <strong>A native macOS research workspace.</strong><br>
  Literature, technical documents, reading notes, citations &mdash; and your next decision.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/macOS-15.6+-000?style=flat-square&logo=apple&logoColor=white" alt="macOS 15.6+">
  <img src="https://img.shields.io/badge/Swift-6-F05138?style=flat-square&logo=swift&logoColor=white" alt="Swift 6">
  <img src="https://img.shields.io/badge/SwiftUI-native-007AFF?style=flat-square" alt="SwiftUI">
  <img src="https://img.shields.io/badge/PDFKit-bundled-1E88E5?style=flat-square" alt="PDFKit">
  <img src="https://img.shields.io/badge/license-MIT-2DA44E?style=flat-square" alt="MIT License">
</p>

<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/download.html">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-black.svg#gh-light-mode-only" height="56" alt="Download on the Mac App Store">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-white.svg#gh-dark-mode-only" height="56" alt="Download on the Mac App Store">
  </a>
</p>

<p align="center">
  <a href="#importing">Importing</a> &middot;
  <a href="#reading--annotations">Reading</a> &middot;
  <a href="#notes--markdown">Notes</a> &middot;
  <a href="#organizing">Organizing</a> &middot;
  <a href="#searching">Search</a> &middot;
  <a href="#citing--exporting">Citing</a> &middot;
  <a href="#syncing--backup">Sync</a> &middot;
  <a href="#keyboard-shortcuts">Shortcuts</a> &middot;
  <a href="https://zendax673.github.io/papyrus-release/">Website</a>
</p>

---

Papyrus Papers is a local-first macOS workspace that connects literature, technical documents, reading notes, citations, and your next decision. One native Mac app instead of a folder, a browser tab, a PDF reader, a knowledge base, and a reference manager.

The rest of this README is the working reference: what each surface does, how to drive it, and where the defaults live.

---

## Importing

Five ways into the library, all of them resolving to the same record type:

| How | What to do | Notes |
|-----|-----------|-------|
| **Drag &amp; drop** | Drop PDFs or folders from Finder onto the library window | Folders are scanned recursively; every nested PDF is imported. |
| **Import PDFs / Docs&hellip;** | Toolbar button or **File &rarr; Import PDFs&hellip;** (`⌘I`) | File picker, multi-select supported. |
| **Import Folder** | **File &rarr; Import Folder&hellip;** | Mirrors the source directory tree inside Papyrus. |
| **Import BibTeX / RIS** | **More Import&hellip; &rarr; Import BibTeX / RIS&hellip;** | `.bib` / `.ris`. Brace-balanced field scanner handles Zotero's nested braces and `note` field. `keywords` &rarr; tags, `groups` &rarr; folders, `langid` &rarr; BCP-47. |
| **Quick Import by identifier** | **More Import&hellip; &rarr; Quick Import DOI / arXiv&hellip;** | Paste `10.1038/s41586-023-06747-5` or `2301.07041`. Creates an identifier-only record if there's no PDF yet. |

**What happens on import**

- **Metadata enrichment** &mdash; DOI / arXiv IDs are extracted from PDF text first, then resolved against Crossref, OpenAlex, and embedded XMP. Per-field provenance is recorded; a conflict picker appears when sources disagree.
- **Duplicate detection** &mdash; papers with a matching normalized title (or title + file size for near matches) are skipped. Toggle in **Settings &rarr; General**.
- **PDF storage** &mdash; per-import sheet asks **Link (in-place)** vs **Copy (managed)**; tick *Remember this choice* to set the default. Change later in **Settings &rarr; General**. See the [PDF Storage Modes](#pdf-storage-modes) section for sync implications.

---

## Reading &amp; annotations

Open a PDF with a double-click in the library, the **Open PDF** button in the detail panel, or `⌘O`. Each paper opens in its own reader window &mdash; the registry brings an existing window to the front instead of stacking duplicates.

**Annotation tools (reader toolbar)**

- **Highlight, underline, strikethrough** &mdash; drag over text; multi-color swatches.
- **Note** &mdash; pinned comment anchored to a passage.
- **Free text** &mdash; longer prose placed anywhere on the page.
- **Bookmark** &mdash; jump-back markers; listed in the **Bookmarks** inspector.
- **Highlights &amp; Notes inspector** &mdash; lists every annotation in a paper, filters by color, lets you edit comments or retint existing markup.

Pre-existing annotations from Preview, PDF Expert, etc. are imported on first open and shown alongside your own.

Switch to the system PDF app via **Settings &rarr; General &rarr; Open PDFs with**. Turn on **Mark papers as read when opening PDF** in the same pane to auto-advance reading state.

---

## Notes &amp; Markdown

Every paper has a Markdown notebook accessible from the reader's **Notebook** tab or the paper detail panel. Both write to the same store, and the content is indexed for full-text search. Notes can also pop out into their own window.

**Markdown syntax**

```markdown
# Heading 1                 ## Heading 2
**bold**  *italic*  ~~strikethrough~~  `inline code`

```lang
fenced code block
```

- bulleted list (`-`, `*`, `+`)
1. numbered list
- [ ] task     - [x] done
---                                    (horizontal rule)

> block quote

| column | column |          (GitHub-style table)
|--------|--------|
| value  | value  |
```

**Beyond standard Markdown**

| Construct | Syntax | Notes |
|-----------|--------|-------|
| Inline math | `$E = mc^2$` | LaTeX rendered inline. |
| Display math | `$$ \int_0^1 x\,dx $$` | LaTeX block. |
| Note cross-reference | `[[note title]]` | Resolves to another note in the same paper / project. |
| Table of contents | `[TOC]` | Auto-generated from headings in the note. |
| Footnote | `[^ref]` + `[^ref]: detail` | Single-line definition. |
| Image | drag or paste | Stored under `papyrus-image://` &mdash; travels with the library. |

---

## Organizing

Four shapes for organizing &mdash; use one, use all four. A paper can sit in any number of them without being moved or duplicated.

- **Folders** &mdash; nested directory-style hierarchy. Drag papers onto a folder to move them. Color-coded and reorderable.
- **Tags** &mdash; free-form, color-coded, multi-tag per paper. The **Batch Tag** sheet retags many papers at once (`⇧⌘T`).
- **Projects** &mdash; working sets bound to a research goal, manuscript, or review. Projects have their own notes, cover icon and color, and one-click export.
- **Smart Collections** &mdash; saved queries that update themselves as the library changes.

**Smart Collections rule fields**

Every collection is built from any combination of:

| Field | Operators / values |
|-------|--------------------|
| Text match | substring against title, authors, abstract |
| Tags | any-of / all-of / none-of |
| Venue / journal | substring or exact |
| Year range | absolute (`2018&ndash;2024`) or **relative** (`last 3 years`) |
| BibTeX type | `article`, `inproceedings`, `book`, `techreport`, &hellip; |
| Favorites | favorites only |
| PDF status | has PDF / no PDF |

Each rule has its own enable toggle &mdash; mute a constraint without deleting it. The preview count updates live as you tune the query.

**Paper state**

| Action | Default shortcut | Notes |
|--------|------------------|-------|
| Toggle Favorite | `⌘D` | Filterable from Smart Collections. |
| Toggle Read / Unread | `⌥⌘U` | Auto-flips on PDF open if enabled. |
| Move to Trash | `⌘⌫` | Trash auto-purges items older than 30 days. |
| Read Later | Paper menu | Built-in reading queue, separate from Favorites. |

---

## Searching

Full-text index covers titles, authors, abstracts, notes, highlights, and PDF body text. Trigger it with `⌘F` from anywhere &mdash; the active surface (library list, sidebar, reader, project) decides what gets filtered.

**Filter tokens**

Narrow results inline by typing tokens into the search field:

```
tag:transformer  year:>=2022  has:pdf  fav:1  venue:NeurIPS
```

Tokens combine with the free-text query &mdash; e.g. `attention tag:nlp year:2024` finds papers tagged `nlp` from 2024 with "attention" anywhere in the indexed text.

**System integration**

- **Core Spotlight** &mdash; Papyrus contributes paper records to macOS system search, so a Spotlight query for the paper title also reveals it.
- **Reader-local search** &mdash; `⌘F` inside the PDF viewer searches the current document, not the library.

---

## Citing &amp; exporting

**Copy Citation** (detail panel, row context menu, or `⌃⌘C` if rebound) copies in the style set under **Settings &rarr; Citations**. The same pane controls whether the DOI is appended.

| Style | Notes |
|-------|-------|
| APA 7 | author-date, journal italics |
| MLA 9 | works-cited format |
| Chicago 17 | author-date variant |
| IEEE | numbered, bracketed |
| Harvard | author-date |
| Vancouver | numbered, biomedical |
| BibTeX | full `@article{&hellip;}` entry, citation key included |
| RIS | one record per paper |

**Bulk export**

- **Writing Pack** &mdash; draft-ready block with citation, BibTeX, your notes, and annotation evidence. Paste straight into a manuscript or design doc.
- **Markdown Note** &mdash; per-paper export with metadata, notes, annotations, and the preferred citation.
- **Project export** &mdash; one-click bundle containing PDFs (annotations preserved), `.bib`, `.ris`, and optional Markdown note files. Mirror your Papyrus folder structure or flatten everything &mdash; chosen at export time.

---

## Syncing &amp; backup

### WebDAV

Settings &rarr; **Sync**. Connect any WebDAV-compatible server:

| Field | Example |
|-------|---------|
| Server URL | `https://dav.example.com/dav/` |
| Username | `you@example.com` |
| Password | server-specific |
| Remote folder | `/Papyrus/library/` |

Use **Test Connection** before trusting a destination. **Sync Now** runs immediately; **Auto-sync in background** triggers when you switch away from the app.

**What travels:** library database, copied PDFs, tags, folders, projects, smart collections, notes, annotations, reading state. **What doesn't:** linked-in-place PDFs (bookmarks are machine-local), and rebuildable caches.

Papyrus never hot-swaps the live database. When remote changes appear, a **Restore Synced Copy** prompt lets you choose when to adopt them &mdash; usually on the next launch of a second Mac.

### Backups

- **7 daily snapshots** of the library store are retained automatically.
- **Create Backup Now** in **Settings &rarr; Storage** for on-demand snapshots before a risky operation.
- **Reveal Backups in Finder** opens the snapshot folder.
- Schema migrations force a fresh backup before applying &mdash; the pre-migration snapshot stays reachable.

---

## PDF storage modes

Picked at import time, switchable per-import or as a default in **Settings &rarr; General**.

|  | **Link (in-place)** | **Copy (managed)** |
|---|---|---|
| Where the PDF lives | original Finder location | Papyrus library folder |
| Disk usage | none added | one copy added |
| Sync includes the file | **No** (bookmark is machine-local) | **Yes** |
| Surviving renames / moves | bookmark warns when stale | unaffected |
| Best for | already-organized libraries, shared volumes | self-contained library, multi-Mac sync |

---

## Keyboard shortcuts

Defaults below; every binding is reconfigurable in **Settings &rarr; Shortcuts** with live conflict detection.

| Command | Default | Scope |
|---------|---------|-------|
| Find in active view | `⌘F` | library / sidebar / reader / project |
| Open PDF | `⌘O` | selected paper |
| Toggle Favorite | `⌘D` | selected paper |
| Manage Tags&hellip; | `⇧⌘T` | selected paper(s) |
| Toggle Read / Unread | `⌥⌘U` | selected paper(s) |
| Move to Trash | `⌘⌫` | selected paper(s) |
| Import PDFs&hellip; | `⌘I` | global |
| Refresh Library Metadata | `⇧⌘R` | global |
| Papyrus Papers Help | `⇧⌘/` | global |
| Settings&hellip; | `⌘,` | global |
| Confirm / Cancel sheet | `Return` / `Esc` | any modal |

Reserved combinations the editor refuses to bind: macOS-standard editing shortcuts (`⌘X/C/V/A/Z`, `⌘W`, `⌘Q`, etc.). Each shortcut row in Settings has a **Reset** action, and the pane footer has **Restore Defaults**.

---

## Settings, in one place

Open with `⌘,`. Tabs:

- **General** &mdash; appearance, default sort, &ldquo;Recently Added&rdquo; window, online metadata fetch, duplicate detection, PDF storage default, library view style (Card / Table), reader open-with.
- **Citations** &mdash; default style, include-DOI toggle.
- **Shortcuts** &mdash; rebind every command with live conflict detection.
- **Sync** &mdash; WebDAV endpoint, credentials, Test Connection, auto-sync.
- **Storage** &mdash; library size, backup management, reveal-in-Finder.
- **Purchase** &mdash; trial state, lifetime unlock, Restore Purchases.
- **Advanced** &mdash; restore defaults, repair the full-text index, metadata polite-pool email, library version / schema info.

---

## Privacy

Local-first by design. Library database, PDFs, notes, indexes, and backups live on your Mac unless you explicitly export, share, or sync them.

Network requests happen only when you use a feature that needs them:

- **Metadata lookup** &mdash; Crossref and OpenAlex for DOI / title repair (toggle in **Settings &rarr; General**).
- **WebDAV sync** &mdash; only if you turn it on, only to the server you configure.
- **Apple Foundation Models** &mdash; on-device, on supported hardware, for background metadata synthesis when an enrichment source returns partial data.

No Papyrus account. No analytics. No telemetry SDKs. No third-party trackers. Full policy: <a href="https://zendax673.github.io/papyrus-release/privacy.html">Privacy</a>.

---

## System requirements

- **macOS 15.6 (Sequoia)** or later
- **Apple Silicon** or **Intel** &mdash; universal binary, ~38 MB
- Internet connection is optional; only required for metadata lookup, WebDAV sync, or App Store updates.

---

## Documentation

- [FAQ](FAQ.md)
- [Changelog](CHANGELOG.md)
- <a href="https://zendax673.github.io/papyrus-release/privacy.html">Privacy Policy</a>
- <a href="https://zendax673.github.io/papyrus-release/support.html">Support &amp; FAQ</a>
- <a href="https://zendax673.github.io/papyrus-release/">Website</a>

---

## Support

- [Report a bug or request a feature](https://github.com/zendax673/papyrus-release/issues/new) &mdash; or browse [open issues](https://github.com/zendax673/papyrus-release/issues).
- **Email:** [zdfu189@gmail.com](mailto:zdfu189@gmail.com)

---

## License

Released under the [MIT License](LICENSE).
